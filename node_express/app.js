const express = require("express");
// const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const app = express();

// const port = 8000;

// app.use(bodyParser.json());

// let todos = [
//   { id: 1, todo: 1 },
//   { id: 2, todo: 2 },
//   { id: 3, todo: 3 },
// ];

// app.get("/todos", (req, res) => {
//   res.json(todos);
// });
// app.listen(port, () => {
//   console.log("Server Running on port ", port);
// });

dbConnect();
const newUser = new User({
  email: "Rohitnami@gmail.com",
  password: "Pass@123",
});

/*creating a new user */
// newUser
//   .save()
//   .then(() => {
//     console.log("user created succesfuly");
//   })
//   .catch((err) => {
//     console.log("error occured", err);
//   });

// User.find({ email: "Rohitnami@gmail.com" })
//   .then((users) => {
//     console.log("user", users);
//   })
//   .catch((err) => {
//     console.log("got some error", err);
//   });

// User.find()
//   .then((users) => {
//     console.log("user", users);
//   })
//   .catch((err) => {
//     console.log("got some error", err);
//   });

// User.updateOne(
//   {
//     email: "Rohitnami@gmail.com",
//   },
//   { password: "pass@12345" },
// )
//   .then(() => {
//     console.log("user updated succesfuly");
//   })
//   .catch((err) => {
//     console.log("error occured", err);
//   });

// User.updateMany({}, { password: "defaultpassword" })
//   .then(() => {
//     console.log("user updated succesfuly");
//   })
//   .catch((err) => {
//     console.log("error occured", err);
//   });

// User.deleteOne({ email: "Rohitnami@gmail.com" })
//   .then(() => {
//     console.log("user deleted succesfuly");
//   })
//   .catch((err) => {
//     console.log("error occured", err);
//   });

// User.deleteMany({
//   /* delete condition*/
// })
//   .then(() => {
//     console.log("user deleted succesfuly");
//   })
//   .catch((err) => {
//     console.log("error occured", err);
//   });

module.exports = app;
