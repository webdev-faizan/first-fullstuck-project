import axios from "axios";
import SignupModal from "../../Model/SignupModal.js";
import TokenGenerator from "../../helper/TokenGenerator.js";


const Facebook = async (req, resp) => {
  const CheckUserExist = await SignupModal.findOne({ email: req.body.email });

  if (
    CheckUserExist?.email &&
    CheckUserExist != undefined &&
    CheckUserExist !== null
  ) {
    if (CheckUserExist.SingupType == "email") {
      return resp.status(400).json({ message: "plase enter your email and password" });
    } else if (CheckUserExist.SingupType == "facebook") {
      const token = TokenGenerator({ userId: CheckUserExist });
      return resp
        .status(200)
        .json({ message: "succesfully authentication", token });
    } else if (CheckUserExist.SingupType == "google") {
      return resp.status(400).json({ message: "email is login with google" });
    }
  }

  const appId = "206207125422645";

  const check = await axios
    .get(
      `https://graph.facebook.com/me?fields=name,email,picture&access_token=${req.body.accessToken}`
    )
    .then((resp) => {
      console.log(resp);
      const user = new SignupModal({
        fullname: resp.data.name,
        email: resp.data.email,
        SingupType: req.body.SingupType,
        isVerified: true,
      });

      user.save().then((resp) => {
        const token = TokenGenerator({ userId: resp._id });
        resp.json({ message: "successfully login", token });
      });
    })
    .catch(() => {
      console.log("error part");
    });

  resp.send("facebook");
};
export default Facebook;
