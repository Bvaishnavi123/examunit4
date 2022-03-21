const express = require("express")
const router = express.Router()
const Comment = require("../models/commentmodel")
const { body, validationResult } = require('express-validator');

router.post("/",async(req,res)=>
{
   
    try {
        const comment = await Comment.create(req.body)
        return res.status(201).send(comment)
    } catch (error) {
       return res.status(500).send(error) 
    }
})

module.exports = router;