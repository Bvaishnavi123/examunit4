const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
title :{type:String,required:true},//( String, required)


},{
    timestamps : true,
    versionKey : false
})

const Todo = mongoose.model("todo",todoSchema)
module.exports = Todo