const User = require("../model/usermodel")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const generateToken = (user)=>{
    return jwt.sign({user},process.env.SCREAT_KEY)
}

const regeister = async(req,res)=>{
    try {
        let user = await User.findOne({email: req.body.email})

        if(user)
        {
            return   res.status(400).send("Email Already Exists")
        }
        const token = generateToken(user)
        user = await User.create(req.body)
        return res.status(200).send({user,token})
    } catch (error) {
        return res.status(400).send({error})
    }
}

const login = async (req, res) => {
    try {
        let user = await User.findOne({email: req.body.email})

        if(!user)
        {
            return res.status(400).send("Wronge Email-Password")
        }
        const match = user.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send("Wronge Email-Password")
        }

        const token = generateToken(user)
      
        return res.status(200).send({user,token})
    } catch (error) {
        res.status(400).send({error})
    }
}

module.exports = {regeister,login,generateToken}