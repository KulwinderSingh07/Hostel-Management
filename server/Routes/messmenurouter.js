const express = require("express");

const router = express.Router();
const messpatchcontroller = require("../Controllers/messpatchcontroller");
const messpostcontroller = require("../Controllers/messpostcontroller");
const menugetcontroller = require("../Controllers/menugetcontroller");

router
  .patch("/", messpatchcontroller)
  .get("/", menugetcontroller)
  .post("/", messpostcontroller);

module.exports = router;
