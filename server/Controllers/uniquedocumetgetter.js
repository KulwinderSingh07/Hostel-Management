const usermodel = require("../Models/usermodel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const uniquedocumets = async (req, res) => {
  const id = "637a16271e2a6b964e1a11ff";
  const uniqueobject = await usermodel.findById(id);
  console.log(uniqueobject);
  res.json({
    message: "got all the leaves",
    data: uniqueobject,
  });
};
module.exports = uniquedocumets;
