const mongosoe = require("mongoose");

const prophileBgImageSchema = mongosoe.Schema({
  userId: {
    type: mongosoe.Schema.Types.ObjectId,
    ref: "singup",
  },

  fieldname: String,
  originalname: String,
  filename: String,
  path: String,
  destination: String,
  mimetype: String,
  size: Number,
  encoding: String,
});

const prophileByImageModel = new mongosoe.model(
  "prohileBgImages",
  prophileBgImageSchema
);

module.exports = prophileByImageModel;
