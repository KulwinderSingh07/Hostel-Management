const mongoose = require("mongoose");
const env = require("dotenv").config();
const crypto = require("crypto");
const pass = process.env.MONGODB_KEY;
const data_url = `mongodb+srv://Kulwinder_Singh:${pass}@cluster0.inyu1da.mongodb.net/?retryWrites=true&w=majority`;
const adminschema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
mongoose
  .connect(data_url)
  .then(() => {
    console.log("User DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
const adminmodel = mongoose.model("adminmodel", adminschema);

module.exports = adminmodel;
