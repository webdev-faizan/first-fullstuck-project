import dotenv from "dotenv";
dotenv.config();
import { OAuth2Client } from "google-auth-library";
import SignupModal from "../../Model/SignupModal.js";
import TokenGenerator from "../../helper/TokenGenerator.js";

const authGoogle = async (req, resp) => {
  const oAuth2Client = new OAuth2Client(
    "57664316633-j7i7juosi15m24dgj01d2bipo5loplhr.apps.googleusercontent.com",
    "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",
    "http://localhost:3000"
  );

  // console.log(req.body,"body")
  const userVerifed = await oAuth2Client.getTokenInfo(req.body.access_token);
  console.log(userVerifed)

  const CheckUserExist = await SignupModal.findOne({
    email: userVerifed.email,
  });
  console.log(CheckUserExist);

  if (
    CheckUserExist?.email &&
    CheckUserExist != undefined &&
    CheckUserExist !== null
  ) {
    if (CheckUserExist.SingupType == "email") {
      return resp.status(400).json({ message: "plase enter your email and password" });
    } else if (CheckUserExist.SingupType == "facebook") {
      return resp.status(400).json({ message: "email is login with facebook" });
    } else if (CheckUserExist.SingupType == "google") {
      const token = TokenGenerator({ userId: CheckUserExist });
      return resp.status(200).json({ message: "successfully verifed", token });
    }
  }
  
  
  else {
    if (userVerifed.email_verified) {
      const user = await new SignupModal({
        email: userVerifed.email,
        SingupType: req.body.SingupType,
        isVerified: true,
      });
      await user.save();

      resp.status(201).json({
        message: "account successfully created",
      });
    } else {
      return resp.status(400).json({ message: "authentication failed" });
    }
  }

  
};

export default authGoogle;
