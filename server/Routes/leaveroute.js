const express = require("express");
const router = express.Router();
const mailer = require("../Controllers/nodemialer");
const leavecontroller = require("../Controllers/leavedatacontroller");
const leavecompletion = require("../Controllers/leaveacception");
const allleavecontroller = require("../Controllers/leavegetcontroller");
router
  .post("/", mailer, leavecontroller)
  .patch("/:id", leavecompletion)
  .get("/", allleavecontroller);
module.exports = router;
