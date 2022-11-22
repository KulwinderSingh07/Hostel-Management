const usermodel = require("../Models/usermodel");

const documentbyid = async (req, res) => {
  const data = req.params.id;

  const userobject = await usermodel.findById(data);
  userobject.save();
  res.json({
    message: "user has been found",
    data: userobject,
  });
};
module.exports = documentbyid;
