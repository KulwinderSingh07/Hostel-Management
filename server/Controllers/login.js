const usermodel = require("../Models/usermodel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const loginhandler = async (req, res) => {
  const jwt_key = process.env.JWT_SECRET_KEY;
  const data = req.body;
  const mail = data.email;
  const mailid = {
    email: mail,
  };
  console.log(typeof mail);

  const documents = await usermodel.findOne({ email: mail });
  console.log(documents);
  try {
    const uid = documents["_id"];
    const token1 = jwt.sign({ payload: uid }, jwt_key);

    console.log(documents.status);
    if (documents.status) {
      const senddata = {
        loginstatus: true,
        token: uid,
      };

      res.json({
        message: "Userloged in",
        data: senddata,
      });
    } else {
      const senddata = {
        loginstatus: false,
        token: uid,
      };
      console.log("err");
      res.json({
        message: "User not loged in",
        data: senddata,
      });
    }
  } catch {
    const uid = documents["_id"];
    const senddata = {
      loginstatus: false,
      token: uid,
    };
    res.json({
      message: "User not loged in",
      data: senddata,
    });
  }
};
module.exports = loginhandler;
