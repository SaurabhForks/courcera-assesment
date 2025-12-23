const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const dbUrl =
    process.env.MONGODB_URI ||
    "mongodb+srv://saurabhTomar:pass12312@devmeet.7buf63s.mongodb.net/dev_meet_db";
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error("Error connecting to MongoDB database:", error);
    process.exit(1);
  }
};

module.exports = { connectToDatabase };
