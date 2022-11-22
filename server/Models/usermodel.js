const mongoose = require("mongoose");
const env = require("dotenv").config();
const crypto = require("crypto");
const pass = process.env.MONGODB_KEY;
const data_url = `mongodb+srv://Kulwinder_Singh:${pass}@cluster0.inyu1da.mongodb.net/?retryWrites=true&w=majority`;
const userschema = mongoose.Schema({
  name: {
    type: String,
    //required: true,
  },
  email: {
    type: String,
  },
  presentclass: {
    type: String,
  },
  branch: {
    type: String,
    //required: true,
  },
  year: {
    type: String,
    //required: true,
  },
  Rollno: {
    type: String,
    //required: true,
  },
  BloodGroup: {
    type: String,
    //required: true,
  },
  Mobileno: {
    type: String,
    //required: true,
  },
  email: {
    type: String,
    //required: true,
  },
  Fathername: {
    type: String,
    //required: true,
  },
  Fatherphone: {
    type: String,
    //required: true,
  },
  Mothername: {
    type: String,
    //required: true,
  },
  Permanantaddress: {
    type: String,
    //required: true,
  },
  Guardianaddress: {
    type: String,
    //required: true,
  },
  Hostelfee: {
    type: String,
    //required: true,
  },
  Messfee: {
    type: String,
    //required: true,
  },
  location1: {
    type: String,
    //required: true,
  },
  location2: {
    type: String,
    //required: true,
  },
  location3: {
    type: String,
    //required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});
userschema.methods.createresettoken = () => {
  const resettoken = crypto.randomBytes(32).toString("hex");
  this.resetToken = resettoken;
  return resettoken;
};
userschema.methods.resetpasswordhandler = (password, confirmPassword) => {
  this.password = password;
  this.confirmPassword = password;
  this.resetToken = undefined;
};
mongoose
  .connect(data_url)
  .then(() => {
    console.log("User DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
const usermodel = mongoose.model("usermodel", userschema);

module.exports = usermodel;
