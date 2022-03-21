const mongoose = require("mongoose")

const bookschema = mongoose.Schema({
likes :{type:Number, default :0},//(integer, minimum default is 0)
coverImage:{type:String,required:true}, //(string, required and it can be 1 only)
content :{type:String,required:true},//( string, required)
publicationId :{type : mongoose.Schema.Types.ObjectId,ref:"publication",required:true},


},{
    timestamps: true,
    versionKey : false
})

const Book = mongoose.model("book",bookschema)
module.exports = Book;