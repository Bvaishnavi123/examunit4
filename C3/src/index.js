const express = require("express")
const app = express()

app.use(express.json())

const userController = require("./controllers/usercontroller")
app.use("/users",userController)

const bookcontroller = require("./controllers/bookcontroller")
app.use("/books",bookcontroller)

module.exports = app;