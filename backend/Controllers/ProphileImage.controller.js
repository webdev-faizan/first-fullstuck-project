const prophileImageModel = require("../Sehema/prophile.image.Sehema");
const singupModel = require("../Sehema/auth.singup.sehema");

const prophileImageConroller = async (req, resp) => {
  try {
    const {
      fieldname,
      filename,
      destination,
      originalname,
      mimetype,
      path,
      size,
      encoding,
    } = req.file;
    console.log(req.file);


    const user = req.user;

    const userId = await user._id;
    const prophileimage = await new prophileImageModel({
      userId: userId,
      fieldname,
      destination,
      path,
      size,
      mimetype,
      originalname,
      encoding,
      filename,
    });
    await singupModel.findByIdAndUpdate(
      { _id: userId },
      { userProphile: prophileimage._id }
    );
    await prophileimage.save();

    resp.status(200).json({
      message: "succesfully upload images",
    });
  } catch (error) {
    resp.status(500).json({ error, message: "hi" });
  }
};

module.exports = prophileImageConroller;
