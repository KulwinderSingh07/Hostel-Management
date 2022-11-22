const leavemodel = require("../Models/leavemodel");

const leavedataconstroller = async (req, res) => {
  const data = req.body;
  console.log(data);
  await leavemodel.create(data);
  res.send("DONE");
};
module.exports = leavedataconstroller;
