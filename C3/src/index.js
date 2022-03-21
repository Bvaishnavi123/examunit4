const express = require("express")
const app = express()

app.use(express.json())

const userController = require("./controllers/usercontroller")
app.use("/users",userController)

const bookcontroller = require("./controllers/bookcontroller")
app.use("/books",bookcontroller)

const commentcontroller = require("./controllers/commentcontroller")
app.use("/comments",commentcontroller)

const postcontroller = require("./controllers/postcontroller")
app.use("/posts",postcontroller)



module.exports = app;