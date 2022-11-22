const usermodel = require("../Models/usermodel");

const alldocumets = async (req, res) => {
  const alldocumets = await usermodel.find();
  res.json({
    message: "got all the leaves",
    data: alldocumets,
  });
};
module.exports = alldocumets;
