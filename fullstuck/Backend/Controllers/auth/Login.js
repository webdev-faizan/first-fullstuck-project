import bcryptjs from "bcryptjs";
import SignupModal from "../../Model/SignupModal.js";
import TokenGenerator from "../../helper/TokenGenerator.js";

const Login = async(req, resp) => {
  const CheckUserExist = await SignupModal.findOne({ email: req.body.email });
  if (CheckUserExist === undefined || CheckUserExist === null) {
    return resp.status(400).json({ message: "Email Not Exist" });
  } else {
    const verifiedPassword = await bcryptjs.compare(
      req.body.password,
      CheckUserExist.password
    );
    if (verifiedPassword) {
      const token = TokenGenerator(CheckUserExist._id);
      return resp.status(200).json({ message: "successfully login", token });
    } else {
      return resp
        .status(406)
        .json({ message: "Email are password is incorrect" });
    }
  }
};
export default Login;
