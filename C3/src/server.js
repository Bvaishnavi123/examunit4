const app = require("./index")
const connect = require("./config/db")

app.listen(4570, async() => {
    try {
      await connect();
      console.log("listening on port 4570")
    } catch (error) {
      console.log("Some thing wrong within server" + error);
    }
  });