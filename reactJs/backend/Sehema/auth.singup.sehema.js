const mongoose = require("mongoose");

const singupSehema = mongoose.Schema({
  userProphile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "prophileImages",
  },
  bgImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "prohileBgImages",
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },

  joinDate: {
    type: Date,
    default: new Date(),
  },
  secreatekey: Number,
});

const singupModel = mongoose.model("singup", singupSehema);
module.exports = singupModel;
