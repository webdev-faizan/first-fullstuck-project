const express = require("express");
const connectDb = require("./mongoose");
const routes = require("./routes/route");
const cors = require("cors");
const speakeasy = require("speakeasy");
const bodyParser = require("body-parser");
const gernerate = speakeasy.generateSecret();

require("./controllers/twofactorVefication.controller");
const secreateKey = gernerate.base32;
const otpusrl = gernerate.otpauth_url;
const QrCode = require("qrcode");
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
// connectDb();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use("/v1", routes);

// QrCode.toDataURL(gernerate.otpauth_url,(error,data,url)=>{
// console.log()
// console.log(data)

// })

// v1/post
// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// console.log(apps)
// const analytics = getAnalytics(apps);

// node upload/local-asset.js

app.listen(8000, () => {
  console.log("running on port 9000");
});
