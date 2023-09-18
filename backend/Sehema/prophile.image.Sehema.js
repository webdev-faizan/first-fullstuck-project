const mongoose = require("mongoose");

const prophileImageSehema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "singup",
  },
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
});

const prophileImageModel = new mongoose.model(
  "prophileImages",
  prophileImageSehema
);

module.exports = prophileImageModel;
