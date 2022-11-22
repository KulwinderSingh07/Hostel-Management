const mongoose = require("mongoose");
const env = require("dotenv").config();
const crypto = require("crypto");
const { stringify } = require("querystring");
const pass = process.env.MONGODB_KEY;
const data_url = `mongodb+srv://Kulwinder_Singh:${pass}@cluster0.inyu1da.mongodb.net/?retryWrites=true&w=majority`;

const messmenuschema = mongoose.Schema({
  day: {
    type: String,
    require: true,
  },
  breakfast: {
    type: String,
    required: true,
  },
  lunch: {
    type: String,
    required: true,
  },
  dinner: {
    type: String,
    required: true,
  },
  breakfasttiming: {
    type: String,
    require: true,
  },
  lunchtiming: {
    type: String,
    require: true,
  },
  dinnertiming: {
    type: String,
    require: true,
  },
});
mongoose
  .connect(data_url)
  .then(() => {
    console.log("Messmenu DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
const messmenumodel = mongoose.model("messmenumodel", messmenuschema);

module.exports = messmenumodel;
