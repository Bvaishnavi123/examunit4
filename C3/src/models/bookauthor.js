const mongoose = require("mongoose")


const bookauthorSchema = mongoose.Schema({
   bookID : [{type : mongoose.Schema.Types.ObjectId,ref:"book",required:true}],
   authorID : [{type : mongoose.Schema.Types.ObjectId,ref:"user",required:true}],
},{
    timestamps: true,
    versionKey : false
})

const bookauthor = mongoose.model("bookauthor",bookauthorSchema)
module.exports = bookauthor