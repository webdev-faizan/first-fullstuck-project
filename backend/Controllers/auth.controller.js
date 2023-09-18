const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const singupModel = require("../Sehema/auth.singup.sehema");

// singup
const Singup = async (req, resp) => {
  try {
    const { fname, lname, email, password } = req.body;
    // const checkAlredyExist = await singupModel.findOne({
    //   email: req.body.email,
    // });

    // if (false) {
    // return resp.status(409).json({
    //   message: "email is already exist",
    // });
    const encryptPass = await bcryptjs.hash(password, 10);
    const postUser = await new singupModel({
      fullname: fname + " " + lname,
      email,
      password: encryptPass,
    });

    await postUser.save();
    console.log("hi thanks");
    const payload = { id: postUser._id };
    const authToken = jwt.sign(payload, process.env.JWT_SECRET);
    resp.status(201).json({
      message: "Successfully Create Cccount",

      authToken,
      status: true,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      return resp.status(409).json({
        message: " email is already exist",
      });
    }
  }

  // else if (error.name === "ValidationError") {
  //   // handle validation errors as shown in the previous answer
  // }
};

// login

const login = async (req, resp) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    const validateUser = await singupModel.findOne({ email });
    if (validateUser && validateUser != null && validateUser !== undefined) {
      const vaidatePass = await bcryptjs.compare(
        password,
        validateUser.password
      );

      if (vaidatePass) {
        const payload = { id: validateUser._id };
        const authToken = jwt.sign(payload, process.env.JWT_SECRET);

        resp.status(200).json({ authToken, message: "user is verifed" });
      } else {
        return resp.status(401).json({
          message: "email or password is incorrect",
          status: false,
        });
      }
    } else {
      return resp.status(401).json({
        message: "email or password is incorrect",
        status: false,
      });
    }
  } catch (error) {
    resp.status(500).json({ error });
  }
};
const home =
  ("/",
  (re, resp) => {
    resp.send("hi");
  });
// // forget password logic

// // send verification token

const forgetPassword = async (req, resp) => {
  try {
    const { email } = req.body;
    const findUserEmail = await singupModel.findOne({ email });

    if (findUserEmail) {
      const secreate = Math.floor(Math.random() * 900);
      await singupModel.findByIdAndUpdate(
        { _id: findUserEmail._id },
        { secreatekey: secreate }
      );

      const authToken = jwt.sign(
        { id: findUserEmail._id },
        process.env.JWT_SECRET
      );
      return resp.status(200).json({
        authToken,
        secreate: secreate,
      });
    } else {
      return resp.status(401).json({
        message: "email is not exist",
      });
    }
  } catch (error) {
    return resp.status(500).json({ error });
  }
};

// // verification token

const verifiedkey = async (req, resp) => {
  try {
    const user = req.user;
    const { code } = req.body;

    console.log("here");

    console.log(user.secreatekey);

    const DBkey = user.secreatekey;
    if (code == DBkey) {
      resp.status(200).json({ message: "valid key" });
    } else {
      return resp.status(401).json({ message: "invalid key" });
    }
  } catch (error) {
    return resp.status(500).json({ error });
  }
};


const passwordChnage = async (req, resp) => {
  try {
    const { password } = req.body;
    const user = req.user;

    const encryptPass = await bcryptjs.hash(password, 10);

    const update = await singupModel.findByIdAndUpdate(
      { _id: user.id },
      {
        password: encryptPass,
      }
    );

    resp.status(200).json({ message: "successfully change password" });
  } catch (error) {
    return resp.status(500).json(error);
  }
};

// update user password

module.exports = {
  Singup,
  login,
  home,
  forgetPassword,
  verifiedkey,
  passwordChnage,
};
