const messmenumodel = require("../Models/messmenumodel");

const menuposthandler = async (req, res) => {
  const data_to_upload = req.body;
  const newmenu = await messmenumodel.create(data_to_upload);
  res.json({
    message: "Menu update",
    data: newmenu,
  });
};
module.exports = menuposthandler;
