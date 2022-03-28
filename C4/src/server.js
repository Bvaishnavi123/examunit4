const app = require("./index")
const connect = require("./config/db")

app.listen(4123,  async()=>{
    try {
        await connect()
        console.log("listeing on port 4123")
    } catch (error) {
       console.log(error) 
    }
})

