const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
firstName :{type:String,required:true},//( String, required)
lastName: {type:String,required:true},// ( String, optional)
email : {type:String,required:true,unique:true},//( String, required)
password :{type:String , required:true},//( String, required)

},{
    timestamps : true,
    versionKey : false
})

const User = mongoose.model("user",userSchema)
module.exports = User

