const leavemodel = require("../Models/leavemodel");

const allleavehandler = async (req, res) => {
  const allleaves = await leavemodel.find();
  res.json({
    message: "got all the leaves",
    data: allleaves,
  });
};
module.exports = allleavehandler;
