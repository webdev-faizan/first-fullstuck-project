const { Router } = require("express");
const prophileImagesRouting = Router();

const prophileImageConroller = require("../Controllers/ProphileImage.controller");
const prophileImageMiddleware = require("../Middleware/ProphileImagesMiddleware");
const prophileBgImageMiddleware = require("../Middleware/prophileBgImageMiddleware.js");
const prophileBgImageConroller = require("../Controllers/prophileBgImage.controller.js");
const Authenctication = require("../Middleware/jwtverification");
const userInfoController = require("../Controllers/userInfo.controller");
const prophileImageSend = require("../profileimagesSend/prophileImage.send");
const BgImageSend = require("../profileimagesSend/bgImage.send");
prophileImagesRouting.get("/userinfo", Authenctication, userInfoController);
prophileImagesRouting.get(
  "/profileimage/:id",
  Authenctication,
  prophileImageSend
);
prophileImagesRouting.get("/bgimage/:id", BgImageSend);
prophileImagesRouting.post(
  "/prophilebgimage",
  Authenctication,
  prophileBgImageMiddleware,
  prophileBgImageConroller
);
prophileImagesRouting.post(
  "/profileimage",
  Authenctication,
  prophileImageMiddleware.single("prophileimage"),
  prophileImageConroller
);

module.exports = prophileImagesRouting;
