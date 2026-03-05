const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URI);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDb;
