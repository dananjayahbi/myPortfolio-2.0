const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbURL = process.env.DB_URL;

const dbConfig = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

module.exports = dbConfig;
