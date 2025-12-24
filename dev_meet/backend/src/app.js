const express = require("express");
const { connectToDatabase } = require("./config/database");
const app = express();
const port = process.env.PORT || 8000;

const UserModel = require("./models/user");
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/getUserByEmail", async (req, res) => {
  const email = req.body.email;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send("User not found");
    } else {
      return res.json(user);
    }
  } catch (error) {
    res.status(500).send("Error fetching user: " + error.message);
  }
});

app.get("/getAllUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching users: " + error.message);
  }
});

app.post("/createuser", async (req, res) => {
  // check if user already exist
  const users = await UserModel.find({ email: req.body.email });
  if (users.length > 0) {
    return res.status(400).send("User already exists");
  }
  // if exist send res user exists
  const userData = req.body;
  if (!userData?.email) {
    return res.status(400).send("Email is required");
  }
  if (!userData?.password) {
    return res.status(400).send("Password is required");
  }
  if (!userData?.firstName) {
    return res.status(400).send("First name is required");
  }
  if (!userData?.lastName) {
    return res.status(400).send("Last name is required");
  }

  const newUser = new UserModel({
    firstName: userData?.firstName ? userData?.firstName : "",
    lastName: userData?.lastName ? userData?.lastName : "",
    email: userData?.email ? userData?.email : "",
    password: userData?.password ? userData?.password : "",
    age: userData?.age ? userData?.age : 0,
    gender: userData?.gender ? userData?.gender : "",
    isMarried: userData?.isMarried ? userData?.isMarried : false,
  });
  try {
    await newUser.save();
    // else create user and send res user created
    res.send("user created successfully");
  } catch (error) {
    res.status(500).send("Error creating user: " + error.message);
  }
});

app.delete("/deleteUser", async (req, res) => {
  const userId = await req.body.userId;
  try {
    await UserModel.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch (error) {}
});

app.patch("/updateUser", async (req, res) => {
  const data = req.body;
  const userId = data.userId;
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, data, {
      returnDocument: "after",
    });
    res.send("User updated successfully" + updatedUser);
  } catch (error) {
    res.status(500).send("Error updating user: " + error.message);
  }
});

app.patch("/updateUserByMail", async (req, res) => {
  const data = req.body;
  const email = data.email;
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { email: email },
      data,
      { returnDocument: "after" },
    );
    res.send("User updated successfully" + updatedUser);
  } catch (error) {
    res.status(500).send("Error updating user: " + error.message);
  }
});

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running.. on port ", port);
    });
  })
  .catch((error) => {
    console.error(
      "Failed to start server due to database connection error:",
      error,
    );
  });
