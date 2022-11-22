const messmenumodel = require("../Models/messmenumodel");

const menuhandler = async (req, res) => {
  const menu = await messmenumodel.find();
  res.json({
    message: "got all the menu",
    data: menu,
  });
};
module.exports = menuhandler;
