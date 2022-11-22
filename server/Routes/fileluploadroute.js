const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const fileuploader = require("../Controllers/fielcontroller");
const uploadFile = require("../Middleware/s3");
const documetuploadhandler = require("../Controllers/getalldocumentuploadcontroller");
const documentverifier = require("../Controllers/documentverifier");
const uniquedocumets = require("../Controllers/uniquedocumetgetter");
const documentbyid = require("../Controllers/getuserbyid");
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/files");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "image" + ".jpg");
  },
});
const upload = multer({
  storage: multerStorage,
});
const cpUpload = upload.fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
]);

router
  .post(
    "/",
    cpUpload,
    async (req, res, next) => {
      const data1 = req.body;
      const file1 = req.files.image1[0];
      const file2 = req.files.image2[0];
      const file3 = req.files.image3[0];
      file1.originalname = `Hostelfee${data1.Rollno}`;
      file2.originalname = `Messfee${data1.Rollno}`;
      console.log(req.files.image3[0]);
      file3.originalname = `Profileimage${data1.Rollno}`;

      const bucket1 = await uploadFile(file1);
      const bucket2 = await uploadFile(file2);
      const bucket3 = await uploadFile(file3);
      req.body.location1 = bucket1.Location;
      req.body.location2 = bucket2.Location;
      req.body.location3 = bucket3.Location;
      next();
    },
    fileuploader
  )
  .get("/", documetuploadhandler)
  .get("/specific", uniquedocumets)
  .get("/:id", documentbyid)
  .patch("/:id", documentverifier);
module.exports = router;
