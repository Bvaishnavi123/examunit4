const mongoose = require("mongoose")

const userandtodoSchema = mongoose.Schema({
  userID :{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
  todoID : [{type:mongoose.Schema.Types.ObjectId,ref:"todo",require:true}]

},{
    timestamps : true,
    versionKey : false
})

const UserandTodo = mongoose.model("userandtodo",userandtodoSchema)
module.exports = UserandTodo