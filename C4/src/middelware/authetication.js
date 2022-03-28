require ("dotenv").config()
const jwt = require("jsonwebtoken")

// const jwt = require('jsonwebtoken');
require('dotenv').config()
const verifyToken = (token)=>{
  return new Promise((resolve,reject) => {
    jwt.verify(token, process.env.JWT_SCRETKEY, (err,decoded) => {
        if(err) return reject(err)

        return resolve(decoded)
    });
})
}



const authenticate = async(req,res,next)=>{
   
    if(!req.headers.authorization)
    {
      return   res.send("Authorization token is incorrect")
    }

    
    if(!req.headers.authorization.startsWith("Bearer "))
    {
        return   res.send("Authorization token is incorrect")
    }

 
    const token = req.headers.authorization.trim().split(" ")[1]
    
    let decoded;
    try{
        decoded = await verifyToken(token)
    }
    catch(err){
        console.log(err)
        return res.status(400).send({message : "Authorization token not found or incorrect"})
    }

    
    
  
    req.user = decoded.user
  
    return next()
}

module.exports = authenticate