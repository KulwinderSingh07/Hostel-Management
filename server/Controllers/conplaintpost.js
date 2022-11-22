const complaintmodel = require("../Models/complaint");

const complaintdataconstroller = async (req, res) => {
  const data = req.body;
  console.log(data);
  await complaintmodel.create(data);
  res.send("DONE");
};
module.exports = complaintdataconstroller;
