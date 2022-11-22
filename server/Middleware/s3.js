require("dotenv").config();
const fs = require("fs");
const AWS = require("aws-sdK");

const bucketname = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accesskeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

function cloudupload(data) {
  AWS.config.update({
    region: region,
    accessKeyId: accesskeyId,
    secretAccessKey: secretAccessKey,
  });
  const s3 = new AWS.S3({
    region: region,
    accesskeyId: accesskeyId,
    secretAccessKey: secretAccessKey,
  });

  console.log(data);
  const filestream = fs.readFileSync(data.path);
  const uploadparams = {
    Bucket: bucketname,
    Body: filestream,
    Key: data.originalname,
  };
  return s3.upload(uploadparams).promise();
}
module.exports = cloudupload;
