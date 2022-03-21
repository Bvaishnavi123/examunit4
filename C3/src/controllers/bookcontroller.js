const express = require("express")
const router = express.Router()
const Book = require("../models/bookmodel")
const { body, validationResult } = require('express-validator');

router.post("/",body("coverImage").not().isEmpty().custom((value)=>{
   
    if(value>1 || value<0)
    {
        throw new Error("Only one url is accepted")
    }
    return true;

}),async(req,res)=>
{
   
    try {
        const book = await Book.create(req.body)
        return res.status(201).send(book)
    } catch (error) {
       return res.status(500).send(error) 
    }
})



module.exports = router;