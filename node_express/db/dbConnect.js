const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect(params) {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("succesfully connected to db");
    })
    .catch((error) => {
      console.log("Not able to connect ", error);
    });
}

module.exports = dbConnect;
