const prophileImageSend = (req, resp) => {
  const fs = require("fs");
  const path = require("path");

  const user = req.params.id;
  const tuser = req.user;

  // const user = "faizan.jpeg";
  const imagePath = path.join(__dirname, `../images/prophileImages/${user}`);
  const userImage = fs.readFileSync(imagePath);
  const base64 = userImage.toString("base64");
  resp.status(200).json({
    profileImage: base64,
  });
};
module.exports = prophileImageSend;
