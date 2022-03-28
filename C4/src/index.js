const express = require("express")
const app = express()
app.use(express.json())
const{regeister,login,generateToken} = require("./controller/authcontroller")

app.post("/register",regeister)
app.post("/login",login)

const user_todocontroller = require("./controller/todo-usercontroller")
app.use("/todos",user_todocontroller)

module.exports = app