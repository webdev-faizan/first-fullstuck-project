const BgImageSend = (req, resp) => {
  const fs = require("fs");
  const path = require("path");
  const user = req.params.id;

  //   return resp.send('awsome')  
  const imagePath = path.join(__dirname, `../images/prophileBgImges/${user}`);
  const userImage = fs.readFileSync(imagePath);
  const base64 = userImage.toString("base64");
  resp.status(200).json({
    bgimage: base64,
  });
};
module.exports = BgImageSend;
