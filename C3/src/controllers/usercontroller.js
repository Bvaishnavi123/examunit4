const express = require("express")
const router = express.Router()
const User = require("../models/usermodel")
const { body, validationResult } = require('express-validator');

router.post("/",body("firstName").not().isEmpty().custom((value)=>{
    if(value.length<3 &&  value.length >30)
    {
        throw new Error("First Name at least greater than 3 chracter ans less than 30 character")
    }
    return true
}),body("lastName").not().isEmpty().custom((value)=>{
    if(value.length<3 &&  value.length >30)
    {
        throw new Error("Last Name at least greater than 3 chracter ans less than 30 character")
    }
    return true
}),body("age").not().isEmpty().isNumeric().custom((value)=>{
    if(value<1 ||  value >150)
    {
        throw new Error("Incorrect age provided")
    }
    return true
}),body("email").not().isEmpty().isEmail().custom(async(value)=>{
    const users = await User.findOne({email : value});
    if(users)
    {
        throw new Error("Email Is Already taken")
    }
    return true;
}),async(req,res)=>{

    try {
        const user = await User.create(req.body)
        return res.status(201).send(user)
    } catch (error) {
       return res.status(500).send(error) 
    }
})

module.exports = router;