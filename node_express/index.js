// const http = require("http");
// const app = require("./app");
// const port = process.env.PORT || 8000;
// app.set("port", port);

// const server = http.createServer(app);

// server.on("listening", () => {
//   console.log("listening on ", port);
// });

// server.listen(port);

const express = require("express");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const jwt = require("jsonwebtoken");

const app = express();

const secret_key = "login_signup_apikey";
app.use(express.json());
app.use(passport.initialize());

const JWTstretegy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const users = [
  {
    id: 1,
    username: "rohit",
    password: "rohit123",
  },
  {
    id: 2,
    username: "admin",
    password: "admin123",
  },
];

passport.use(
  new JWTstretegy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret_key,
    },
    (jwtPayload, done) => {
      const user = users.find((user) => user.id === jwtPayload.sub);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    },
  ),
);

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt for user:", req.body);

  const user = users.find(
    (u) => u.username === username && u.password === password,
  );
  if (user) {
    const payload = {
      sub: user.id,
      username: user.username,
    };
    const token = jwt.sign(payload, secret_key, { expiresIn: "1h" });
    res.json({ message: "Login successful", token: token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});
//   )
//   .then(() => {
//     console.log("user updated succesfuly");
//   })
//   .catch((err) => {
//     console.log("error occured", err);
//   });
app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      message: "You have accessed a protected route",
      user: req.user,
    });
  },
);

const port = 8000;
app.listen(port, () => {
  console.log("Server Running on port ", port);
});
