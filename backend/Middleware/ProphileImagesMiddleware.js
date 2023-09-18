const multer = require("multer");

const prophileBgImageMiddleware = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./images/prophileImages");
    },

    filename: function (req, file, cb) {
      const randomName = Date.now().toString();
      const fileOriginalName = file.fieldname;
      const filetype = file.mimetype.split("/")[1];

      cb(null, file.fieldname + randomName + "." + filetype);
    },
  }),
});
module.exports = prophileBgImageMiddleware;
