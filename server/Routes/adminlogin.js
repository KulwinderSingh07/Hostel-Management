const express = require("express");
const adminloginhandler = require("../Controllers/adminloginhandler");
const router = express.Router();

router.post("/", adminloginhandler);

module.exports = router;
