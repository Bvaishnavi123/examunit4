const mongoose = require("mongoose")


const publicationSchema = mongoose.Schema({
    name : {type:mongoose.Schema.Types.ObjectId,ref:"post",required : true},
   

},{
    timestamps: true,
    versionKey : false
})

const publication = mongoose.model("publication",publicationSchema)
module.exports = publication