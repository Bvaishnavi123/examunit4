const express = require("express")
const router = express.Router()
const Post = require("../models/postmodel")
const { body, validationResult } = require('express-validator');

router.get("/",async(req,res)=>
{
    const pageSize = req.query.pageSize || 10;
    const page = req.query.page || 1;

    const skip =Math.round((page-1)*pageSize)

   
    try {
        const post = await  Post.find().skip(skip).limit(pageSize).lean().exec()
        return res.status(201).send(post)
    } catch (error) {
       return res.status(500).send(error) 
    }
})

module.exports = router;