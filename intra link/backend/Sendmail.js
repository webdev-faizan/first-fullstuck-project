import nodemailer from "nodemailer";

const SendMail = async (FristName, LastName, Phone, Email, Location) => {
  //   let testAccount = await nodemailer.createTestAccount();
  console.log("nodmail");

  let transporter = nodemailer.createTransport({
    service: "gmail",
    user: process.env.USER,
    pass: process.env.PASSWORD,
    auth: {
      user: "webdev.faizanali@gmail.com",
      pass: "ffexaasawatogvfenp",
    },
  });

  let info = await transporter.sendMail({
    from: "webdev.faizanali@gmail.com",
    to: `${Email}`,
    subject: "New inquiry - Bicycle",
    text: `Full Name: ${FristName} ${LastName}\nPhone: ${Phone}\nLocation: ${Location}\n\nYou have a new inquiry about a bicycle.`,
  });
};
export default SendMail;
