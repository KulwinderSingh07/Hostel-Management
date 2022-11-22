const usermodel = require("../Models/usermodel");

const documentverifier = async (req, res) => {
  const data = req.params.id;

  const userobject = await usermodel.findById(id);
  userobject.status = true;
  userobject.save();
  res.send("done");
};
module.exports = documentverifier;
