const mongoose = require("mongoose")


const bookcommentSchema = mongoose.Schema({
   bookID : [{type : mongoose.Schema.Types.ObjectId,ref:"book",required:true}],
   commentID : [{type : mongoose.Schema.Types.ObjectId,ref:"comment",required:true}],
},{
    timestamps: true,
    versionKey : false
})

const bookcomment = mongoose.model("bookcomment",bookcommentSchema)
module.exports = bookcomment