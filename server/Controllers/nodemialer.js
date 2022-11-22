const nodemailer = require("nodemailer");
require("dotenv").config();
const mailer = (req, res, next) => {
  const maildata = req.body;
  console.log(maildata);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",

    auth: {
      user: "laddiaulakh2002@gmail.com",
      pass: process.env.Mail_PASS,
    },
  });
  let info = transporter.sendMail({
    from: "laddiaulakh2002@gmail.com",
    to: maildata.recievermail,
    subject: "Leave Application",
    text: `I ${maildata.roomno} require a leave from ${maildata.startdate} to ${maildata.enddate} because of ${maildata.reason}`,
  });
  next();
};
module.exports = mailer;
