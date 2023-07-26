const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const UserModel = require("../schemas/user.schema");
const GoogleAuth = async (req, resp) => {
  try {
    const user = await UserModel.findOne({ email: req.body.profileObj.email });
    if (user && user != null && user != undefined) {
      const payload = { id: user._id };
      
      const token = jwt.sign(payload, "faizan");

      return resp.status(200).json({
        message: "successfully login",
        token,
      });
    } else {
      const oAuth2Client = new OAuth2Client(
        "57664316633-j7i7juosi15m24dgj01d2bipo5loplhr.apps.googleusercontent.com",
        "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",
        "http://localhost:3000"
      );
      const userVerifed = await oAuth2Client.getTokenInfo(req.body.accessToken);

      if (userVerifed.email_verified) {
        const user = await new UserModel({
          username: req.body.profileObj.name.toLowerCase(),
          email: req.body.profileObj.email,
        });
        await user.save();
        const payload = { id: user._id };
        const token = jwt.sign(payload, "faizan");
        resp.status(201).json({
          message: "singup successfully",
          user,
          token,
        });
      }
      //   console.log(req.body.profileObj);
      // } else {
      //   return resp.status(401).end();
      // }

      resp.status(401).end();
    }
  } catch (error) {
    resp.status(500).send(error);
  }
};

module.exports = GoogleAuth;
