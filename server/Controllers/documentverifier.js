const usermodel = require("../Models/usermodel");

const documentverifier = async (req, res) => {
  const id = req.params.id;
  const userobject = await usermodel.findById(id);
  console.log(userobject);
  userobject.status = true;
  const senddata = userobject.status;
  userobject.save();
  res.json({
    message: "user has been verified",
    data: senddata,
  });
};
module.exports = documentverifier;
