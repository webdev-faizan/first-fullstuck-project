const singupModel = require("../Sehema/auth.singup.sehema");
const prophileImageModel = require("../Sehema/prophile.image.Sehema");
const userInfoController = async (req, resp) => {
  try {
    const user = req.user;
    const userId = user.id;
    console.log('aowhi')

    let fullUserInfo = await singupModel
      .findOne({ _id: userId })
      .populate(["userProphile", "bgImage"]);

    return resp.status(200).json(fullUserInfo);
  } catch (error) {
    return resp.status(500).json(error);
  }
};
module.exports = userInfoController;

