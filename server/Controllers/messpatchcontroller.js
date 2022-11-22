const messmenumodel = require("../Models/messmenumodel");

const messposthandler = async (req, res) => {
  const datatobeupdated = req.body;
  const id = req.body.day;
  const finder = {
    day: id,
  };
  try {
    const menu = await messmenumodel.findOne(finder);
    if (menu) {
      let keys = [];
      for (let key in datatobeupdated) {
        keys.push(key);
      }

      for (let i = 0; i < keys.length; i++) {
        menu[keys[i]] = datatobeupdated[keys[i]];
      }
      await menu.save();
      res.json({
        message: "user has been updated",
        data: menu,
      });
    } else {
      res.json({
        message: "user is not found in te database",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = messposthandler;
