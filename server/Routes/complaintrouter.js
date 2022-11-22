const express = require("express");
const router = express.Router();
const complaintdatacontroller = require("../Controllers/conplaintpost");
const compplaintstatus = require("../Controllers/complaintcomplete");
const allcomplaint = require("../Controllers/getallcomplaint");

router
  .post("/", complaintdatacontroller)
  .patch("/:id", compplaintstatus)
  .get("/", allcomplaint);
module.exports = router;
