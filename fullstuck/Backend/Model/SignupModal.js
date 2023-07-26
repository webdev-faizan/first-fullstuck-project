import mongoose from "mongoose";
const Schema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  status: {
    type: Boolean,
    default: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  SingupType: String,
});

const SignupModal = new mongoose.model("usermodal", Schema);

export default SignupModal;
