const { ConnectionStates } = require("mongoose");
const prophileByImageModel = require("../Sehema/prophileBgImage.Sehma");
const singupModel = require("../Sehema/auth.singup.sehema");

const prophileBgImageController = async (req, resp) => {
  try {
    const {
      originalname,
      fieldname,
      filename,
      path,
      destination,
      mimetype,
      size,
      encoding,
    } = req.file;

    // find who user can login and also find the user ID
    const user = await req.user;
    const userId = await user._id;

    const BgImage = await prophileByImageModel({
      userId: userId,
      fieldname,
      filename,
      originalname,
      mimetype,
      encoding,
      destination,
      path,
      size,
    });

    // find background image id
    const bgImageId = await BgImage._id;

    //here create relationship  between  login user and  background image

    await singupModel.findByIdAndUpdate(
      { _id: userId },
      { bgImage: bgImageId }
    );

    await BgImage.save();

    return resp.status(200).json({
      message: "successfully upload image",
    });
  } catch (error) {
    return resp.status(403).json({ error });
  }
};

module.exports = prophileBgImageController;
