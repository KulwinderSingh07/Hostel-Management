const adminmodel = require("../Models/adminmodel");

const adminloginhandler = async (req, res) => {
  const data = req.body;
  console.log(data);
  const mail = data.email;
  console.log(mail);
  if (mail === "laddiaulakh2002@gmail.com") {
    res.json({
      message: "Userloged in",
      data: true,
    });
  } else {
    res.json({
      message: "User not loged in",
      data: false,
    });
  }
};
module.exports = adminloginhandler;
