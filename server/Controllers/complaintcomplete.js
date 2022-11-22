const complaintmodel = require("../Models/complaint");

const complaintdataconstroller = async (req, res) => {
  const data = req.params.id;
  console.log(data);
  const complaintobject = await complaintmodel.findById(data);
  console.log(complaintobject);
  complaintobject.solved = true;
  await complaintobject.save();
  res.json({
    message: "leave accepted",
  });
};
module.exports = complaintdataconstroller;
