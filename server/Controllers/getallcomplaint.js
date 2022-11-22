const complaintmodel = require("../Models/complaint");

const allcomplainthandler = async (req, res) => {
  const allcomplaints = await complaintmodel.find();
  console.log(allcomplaints[0]);
  res.json({
    message: "got all the leaves",
    data: allcomplaints,
  });
};
module.exports = allcomplainthandler;
