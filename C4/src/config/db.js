// mongodb+srv://vaishnvai:vaishnavi@cluster0.wuv5g.mongodb.net/evaluation?retryWrites=true&w=majority

const { default: mongoose } = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://vaishnvai:vaishnavi@cluster0.wuv5g.mongodb.net/evaluation?retryWrites=true&w=majority");
    console.log("Conntection success !!!");
  } catch (error) {
    console.error("DB Connection error" + error);
  }
}

module.exports = connect;