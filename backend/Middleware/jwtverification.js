const jwt = require("jsonwebtoken");
const singupModel = require("../Sehema/auth.singup.sehema");

const Authenctication = async (req, resp, next) => {
  try {
    const [, token] = req.headers.authorization.split(" ");
    if (!token) {
      return resp.status(401).send({ message: "Authorization header missing" });
    } else {
      const verificationUser = jwt.verify(token, process.env.JWT_SECRET);

      const finduser = await singupModel.findOne({ _id: verificationUser.id });

      if (finduser && finduser != null && finduser != undefined) {
        req.user = finduser;
        next();
      } else {
        return resp.status(401).json({
          message: "unauthorized user",
        });
      }
    }
  } catch (error) {
    resp.status(500).json({ message: error });
  }
};

module.exports = Authenctication;
