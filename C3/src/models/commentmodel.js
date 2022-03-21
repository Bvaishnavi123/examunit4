const mongoose = require("mongoose")


const commentSchema = mongoose.Schema({
    body : {type:String,required:true},
    userID : {type : mongoose.Schema.Types.ObjectId,ref:"user",required:true},
},{
    timestamps: true,
    versionKey : false
})

const comment = mongoose.model("comment",commentSchema)
module.exports = comment