const express = require('express');
const router = express.Router()
const Todoanduser =  require("../model/userandtodomodel")
const Authenticate = require("../middelware/authetication")
const Authorization = require("../middelware/authorization")

router.get("/",Authenticate,async(req,res)=>{
    try{
     
     const todobyuser = await Todoanduser.find().lean().exec()
      res.status(200).send(todobyuser)

    }catch{
       res.status(500).send(error)
    }
})

router.post("/",Authenticate,async(req,res)=>{
    req.body.user_id = req.user._id
    try{
     
     const todobyuser = await Todoanduser.create(req.body)
      res.status(200).send(todobyuser)

    }catch{
       res.status(500).send(error)
    }
})

router.get("/:id",Authenticate,async(req,res)=>{
  req.body.user_id = req.user._id
  try{
   
   const todobyuser = await Todoanduser.find(req.params.id).lean().exec()
    res.status(200).send(todobyuser)

  }catch{
     res.status(401).send(error)
  }
})

router.patch("/:id",Authenticate,async(req,res)=>{
  req.body.user_id = req.user._id
  try{
   
   const todobyuser = await Todoanduser
    res.status(200).send(todobyuser)

  }catch{
     res.status(500).send(error)
  }
})
router.delete("/:id",Authenticate,async(req,res)=>{
  req.body.user_id = req.user._id
  try{
   
   const todobyuser = await Todoanduser.create(req.body)
    res.status(200).send(todobyuser)

  }catch{
     res.status(500).send(error)
  }
})

module.exports = router


