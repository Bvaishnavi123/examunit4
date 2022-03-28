const express = require('express');
const router = express.Router()
const Todoanduser =  require("../model/userandtodomodel")
const Authenticate = require("../middelware/authetication")
const Authorization = require("../middelware/authorization")

router.get("/",Authenticate,async(req,res)=>{
    try{
     
     const todobyuser = await Todoanduser.find().lean().exec()
      return res.status(200).send(todobyuser)

    }catch{
      return res.status(500).send(error)
    }
})

router.post("/",Authenticate,async(req,res)=>{
    req.body.user_id = req.user._id
    try{
     
     const todobyuser = await Todoanduser.create(req.body)
     return res.status(200).send(todobyuser)

    }catch{
      return res.status(500).send(error)
    }
})

router.get("/:id",Authenticate,async(req,res)=>{
  req.body.user_id = req.user._id
  try{
   
   const todobyuser = await Todoanduser.find(req.params.id).lean().exec()
   return  res.status(200).send(todobyuser)

  }catch{
    return res.status(401).send(error)
  }
})

router.patch("/:id",Authenticate,async(req,res)=>{
  req.body.user_id = req.user._id
  try{
   
   const todobyuser = await Todoanduser.findByIdAndUpdate(req.params.id,req.body,{new:true})
   return res.status(200).send(todobyuser)

  }catch{
    return res.status(401).send(error)
  }
})
router.delete("/:id",Authenticate,async(req,res)=>{
  req.body.user_id = req.user._id
  try{
   
   const todobyuser = await Todoanduser.findByIdAndDelete(req.params.id)
   return res.status(200).send(todobyuser)

  }catch{
    return  res.status(401).send(error)
  }
})

module.exports = router


