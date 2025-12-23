const express = require("express");
const { connectToDatabase } = require("./config/database");
const app = express();
const port = process.env.PORT || 8000;

connectToDatabase();
app.listen(port, () => {
  console.log("Server is running.. on port ", port);
});
