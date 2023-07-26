const multerS3 = require("multer-s3");
const FileBase = require("filebase");
// const multer = require("multer");
// const aws = require("aws-sdk");
// const { S3Client } = require("@aws-sdk/client-s3");

const filebase = new FileBase();
let s3 = new filebase.S3({
  // endpoint: "https://s3.filebase.com",
  endpoint: "https://api.filebase.io/v1/ipfs",
  accessKeyId: "D91794BB246886DA7BA8",
  secretAccessKey: "o99m7aeTY9RYFq1vs3IsxMBtCXzbBWewpPZit5rG",
})();
const UploadImage = multer({
  storage: multerS3({
    s3: s3,
    bucket: "faizanali",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    // cl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

const MulterS3Middlware = UploadImage.single("file");
module.exports = MulterS3Middlware;
