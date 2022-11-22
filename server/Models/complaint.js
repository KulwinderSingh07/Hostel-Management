const mongoose = require("mongoose");
const env = require("dotenv").config();
const crypto = require("crypto");
const pass = process.env.MONGODB_KEY;
const data_url = `mongodb+srv://Kulwinder_Singh:${pass}@cluster0.inyu1da.mongodb.net/?retryWrites=true&w=majority`;

const complaintschema = mongoose.Schema({
  complaint: {
    type: String,
  },
  roomno: {
    type: String,
  },
  solved: {
    type: Boolean,
    default: false,
  },
  rollno: {
    type: String,
  },
});
mongoose
  .connect(data_url)
  .then(() => {
    console.log("complaint DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
const complaintmodel = mongoose.model("complaintmodel", complaintschema);

module.exports = complaintmodel;
