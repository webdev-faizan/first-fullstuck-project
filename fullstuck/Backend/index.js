import dotenv from "dotenv";
import express from "express";
import connectDb from "./connection/connectDB.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
import Routes from "./Routes/Routes.js";
dotenv.config();
const Port = process.env.PORT || 8000;
connectDb();

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/v1", Routes);
app.listen(Port, () => {
  console.log("port is running " + Port);
});

import nodemailer from "nodemailer";

async function newse() {
  var transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "brando.koelpin99@ethereal.email",
      pass: "Ur4JXAPQwpJ1y781Cc",
    },
  });

  var mailOptions = {
    from: "freelancerfaizan360@gmail.com",
    to: "faizoofaizanali@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: ");
    }
  });
}
// newse();

async function main() {
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    service: "gmail",
    auth: {
      user: "webdev.faizanali@gmail.com",
      pass: "exaasawatogvfenp",
    },
  });

  await transporter.sendMail({
    from: "webdev.faizanali@gmail.com",
    to: "faizoofaizanali@gmail.com", //
    subject: "Hello from ChatGPT",
    text: "this is me ", //

  });

  console.log("Message sent");
}
main()