const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    firstName : {type:String,required:true},//(string, required, minimum length 3 and maximum length 30)
    lastName : {type:String,required:false},//(string, optional, if given then minimum length 3 and maximum length 30)
    age  : {type:Number,required:true},//(integer, required, should be between 1 and 150)
    email :{type:String,required:true,unique:true},//(string, required, unique)
    profileImages: [{type:String, required:true}] //(array of imageUrls and atleast 1 profile image is required)
},{
    timestamps: true,
    versionKey : false
})

const User = mongoose.model("user",userSchema)
module.exports = User