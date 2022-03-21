const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://vaishnavi:vaishnavi@cluster0.afine.mongodb.net/Bank_system?retryWrites=true&w=majority"
  );
};

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: false, default: "female" },
    type: { type: String, required: false, default: "customer " },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

const branchDetailSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const branchDetail = mongoose.model("branchDetail", branchDetailSchema);

const Masteraccountschema = mongoose.Schema(
  {
    balance: { type: Number, required: true },
    UserId: [
      { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    ],
    branchDetailid: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "branchDetail",
        required: true,
      },
    ],
    mangerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Masteraccount = mongoose.model("masterbranch", Masteraccountschema);

const savingaccountschema = mongoose.Schema(
  {
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    masterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "masterbranch",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const savingaccount = mongoose.model("savingaccount", savingaccountschema);

const fixedaccountschema = mongoose.Schema(
  {
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: Number, required: true },
    maturityDate: { type: Number, required: true },
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    masterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "masterbranch",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const fixedaccount = mongoose.model("fixedaccount", fixedaccountschema);

// const accountshavingbyusers = mongoose.Schema({
//     UserId : {type : mongoose.Schema.Types.ObjectId,ref:"user",required:true},
//     account_number : {type:Number , required:true, unique:true},
//     balance : {type:Number , required:true}
// })
// const singleuseraccountinfo = mongoose.model("singleuseraccount",accountshavingbyusers)

// const listofaccountschema = mongoose.Schema(
//   {
//     masterId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "masterbranch",
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const list = mongoose.model("list", listofaccountschema);

app.get("/masteraccountinfo", async (req, res) => {
  try {
    const Detail = await Masteraccount.find()
      .populate({
        path: "UserId",
        select: ["firstName", "lastName", "email", "type"],
      })
      .populate({ path: "mangerId", select: ["type", "firstName", "lastName"] })
      .lean()
      .exec();
    return res.status(200).send(Detail);
  } catch (error) {
    res.send(error);
  }
});

app.post("/createsavingacc", async (req, res) => {
  try {
    const savingaccountcreate = await savingaccount.create(req.body);
    return res.status(201).send(savingaccountcreate);
  } catch (error) {
    res.send(error);
  }
});

app.post("/createfixedacc", async (req, res) => {
  try {
    const fixedaccountcreate = await fixedaccount.create(req.body);
    return res.status(201).send(fixedaccountcreate);
  } catch (error) {
    res.send(error);
  }
});

// app.get("/onlyaccandbalance", async (res, req) => {
//   try {
//     const balanceandacc = await list
//       .find()
//       .populate({ path: "masterId", select: ["balance"] })
//       .lean()
//       .exec();
//     return res.status(200).send(balanceandacc);
//   } catch (error) {
//     res.send(error);
//   }
// });

app.listen(4500, async () => {
  try {
    connect();
    console.log("listen on port 4500");
  } catch (error) {
    console.log(error);
  }
});
