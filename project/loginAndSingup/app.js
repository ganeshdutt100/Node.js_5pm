const express = require("express");
const app = express();
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// landing page
app.get("/", (req, res) => {
  res.render("index");
});
// Register(Signup)
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/create", async (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });

      let token = jwt.sign({ email: email, userid: createdUser._id }, "shhhhh");
      res.cookie("token", token);
      res.send("User Created Successfully");
    });
  });
});

// login
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email: email });
  if (!user) return res.send("User not found");

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "shhhhh");
      res.cookie("token", token);
      res.status(200).send("You can Login");
    } else {
      res.send("Something went wrong");
    }
  });
});

// logout
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") res.redirect("/login");
  else {
    let data = jwt.verify(req.cookies.token, " shhhhh");
    req.user = data;
    next();
  }
}

app.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  res.render("profile", { user });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
