const express = require("express");
const loginhandler = require("../Controllers/login");
const router = express.Router();

router.post("/", loginhandler);

module.exports = router;
