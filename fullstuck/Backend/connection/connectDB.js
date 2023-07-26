import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};

 export default connectDB