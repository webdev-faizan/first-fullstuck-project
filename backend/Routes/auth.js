const { Router } = require("express");
const {
  Singup,
  login,
  forgetPassword,
  verifiedkey,
  passwordChnage,
} = require("../Controllers/auth.controller");
const Authenctication = require("../Middleware/jwtverification");

const AuthRouting = Router();
AuthRouting.post("/singup", Singup);
AuthRouting.post("/login", login);
AuthRouting.post("/forgetPassword", forgetPassword);
AuthRouting.post("/code", Authenctication, verifiedkey);
AuthRouting.put("/changepassword", Authenctication, passwordChnage);

module.exports = AuthRouting;
