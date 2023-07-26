const speakeasy = require("speakeasy");
const QRcode = require("qrcode");

// console.log(secret);
const secret = speakeasy.generateSecret({ name: "faizanali" });
const GenerateQR = async (req, resp) => {
  const data = await QRcode.toDataURL(secret.otpauth_url);
  resp.status(200).send({ data, message: "otp token" });
};
const VerifiedQR = async (req, resp) => {
  const tokenValidates = speakeasy.totp.verify({
    secret: secret.base32,
    encoding: "base32",
    token: req.body.code,
  });
  
  console.log(tokenValidates);

  resp.json({message:'code verfied'})

  resp.end();
};

module.exports = { GenerateQR, VerifiedQR };
