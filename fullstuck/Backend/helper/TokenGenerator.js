import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const TokenGenerator = (id) => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET);
  return token;
};

export default TokenGenerator;
