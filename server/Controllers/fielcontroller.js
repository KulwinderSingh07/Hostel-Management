const Axios = require("axios");
const usermodel = require("../Models/usermodel");
const filehandler = async (req, res) => {
  const applicantdata = req.body;
  const user = await usermodel.create(applicantdata);
  res.redirect("http://localhost:3000/useroptions");
};
module.exports = filehandler;
