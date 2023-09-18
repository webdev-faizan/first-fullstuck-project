require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
  
  try {
    // const uri = "mongodb+srv://ffaizan:ukyBqwjGCsfwajpo@faizan.bcwofpc.mongodb.net/?retryWrites=true&w=majority";
    const uri = "mongodb://127.0.0.1:27017/portfolio";
    mongoose.set("strictQuery", false);
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("database  connected successfully ");
  } catch (error) {
    console.log("database  can not connected to the database " + error);
  }
};
module.exports = connectDB;
