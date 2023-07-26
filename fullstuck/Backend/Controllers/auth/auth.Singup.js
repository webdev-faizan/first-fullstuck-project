import bcryptjs from "bcryptjs";
import SignupModal from "../../Model/SignupModal.js";
import TokenGenerator from "../../helper/TokenGenerator.js";

const SignupController = async (req, resp) => {
  const { email, password, SingupType, fname, lname } = req.body;

  const CheckUserExist = await SignupModal.findOne({ email: req.body.email });
  // check email exist
  if (
    CheckUserExist?.email &&
    CheckUserExist != undefined &&
    CheckUserExist !== null
  ) {
    if (CheckUserExist.SingupType == "email") {
      return resp.status(400).json({ message: "Email already Exist" });
    } else if (CheckUserExist.SingupType == "facebook") {
      return resp.status(400).json({ message: "email is login with facebook" });
    } else if (CheckUserExist.SingupType == "google") {
      return resp.status(400).json({ message: "Email is Login with Google" });
    }
  }

  // user singup
  else {
    const bcryptPas = await bcryptjs.hash(password, 7);
    const user = await new SignupModal({
      fullname: fname + " " + lname,
      email,
      password: bcryptPas,
      SingupType,
    });

    await user.save();
    const token = TokenGenerator({ userId: CheckUserExist });
      return resp.status(201).json({ message: "account successfully created", token });
   
  }
};

export default SignupController;
