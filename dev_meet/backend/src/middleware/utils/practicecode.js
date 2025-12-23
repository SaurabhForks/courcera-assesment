const { userAuth } = require("./middleware/auth");
const { handleError } = require("./middleware/errorHandler");
const express = require("express");
app.use("/user", userAuth);
app.post("/createuser", (req, res) => {
  // check if user already exist
  // if exist send res user exists
  // else create user and send res user created

  res.send("create user called");
});

app.get("/user/getAllUsers", (req, res) => {
  // fetch all users from database
  // send res with user list

  res.send("get all users called");
});

app.get("/user/getuser/:id", (req, res) => {
  const userId = req.params.id;
  // fetch user from database using userId
  // send res with user data
  //if id not found send res user not found
  res.send(`get user called for ID: ${userId}`);
});

app.delete("/user/deleteuser/:id", (req, res) => {
  const userId = req.params.id;
  // check if user exist
  // if exist delete user and send res user deleted
  // else send res user not found
  res.send(`delete user called for ID: ${userId}`);
});

app.put("/user/updateuser/:id", (req, res) => {
  const userId = req.params.id;
  // check if user exist
  // if exist update user data and send res user updated
  // else send res user not found
  res.send(`update user called for ID: ${userId}`);
});

app.patch("/user/patchuser/:id", (req, res) => {
  const userId = req.params.id;
  // check if user exist
  // if exist patch user data and send res user patched
  // else send res user not found
  res.send(`patch user called for ID: ${userId}`);
});

app.use("/", handleError);
