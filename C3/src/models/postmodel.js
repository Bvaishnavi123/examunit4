const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    userId : {type:mongoose.Schema.Types.ObjectId,ref:"user",required : true},
    bookId : {type:mongoose.Schema.Types.ObjectId,ref:"book",required : true},
    commentID : {type:mongoose.Schema.Types.ObjectId,ref:"comment",required : true},
    publicationID : {type:mongoose.Schema.Types.ObjectId,ref:"publication",required : true},
   

},{
    timestamps: true,
    versionKey : false
})

const post= mongoose.model("post",postSchema)
module.exports = post