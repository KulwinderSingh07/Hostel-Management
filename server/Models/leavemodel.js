const mongoose = require("mongoose");
const env = require("dotenv").config();
const crypto = require("crypto");
const pass = process.env.MONGODB_KEY;
const data_url = `mongodb+srv://Kulwinder_Singh:${pass}@cluster0.inyu1da.mongodb.net/?retryWrites=true&w=majority`;

const leaveschema = mongoose.Schema({
  recievermail: {
    type: String,
    // required: true,
  },
  rollno: {
    type: String,
  },
  startdate: {
    type: String,
    // required: true,
  },
  enddate: {
    type: String,
    // required: true,
  },
  reason: {
    type: String,
    // required: true,
  },
  roomno: {
    type: String,
    // required: true,
  },
  granted: {
    type: Boolean,
    default: false,
  },
});
mongoose
  .connect(data_url)
  .then(() => {
    console.log("Leave DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
const leavemodel = mongoose.model("leavemodel", leaveschema);

module.exports = leavemodel;
