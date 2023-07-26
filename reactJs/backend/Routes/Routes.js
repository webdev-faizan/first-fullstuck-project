const { Router } = require("express");
const Routes = Router();
const AuthRouting = require("./auth");
const prophileImagesRouting = require("./profileImages");

Routes.use("/auth", AuthRouting);
Routes.use("/", prophileImagesRouting);

// const  prophileImageModel  = require("../Sehema/prophile.image.Sehema");
// const relation = async (req, resp) => {
//   const finduser = await prophileImageModel
//     .findOne({ _id: "64085bf82b7597ce717c8eaa" }).populate("userProphileImage")
  
//   console.log(finduser);

// };
// relation()
module.exports = Routes;
