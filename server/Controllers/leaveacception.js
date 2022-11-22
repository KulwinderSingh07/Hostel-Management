const leavemodel = require("../Models/leavemodel");

const leavedataconstroller = async (req, res) => {
  const data = req.params.id;
  console.log(data);
  const leaveobject = await leavemodel.findById(data);
  console.log(leaveobject);
  leaveobject.granted = true;
  await leaveobject.save();
  res.json({
    message: "leave accepted",
    data: leaveobject,
  });
};
module.exports = leavedataconstroller;
