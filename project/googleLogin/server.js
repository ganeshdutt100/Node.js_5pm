const express = require("express");
const session = require("express-session");
const passport = require("passport");
const app = express();
require("./auth/google");

app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send(`<a href="/auth/google">Login</a>`);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/profile",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.get("/profile", (req, res) => {
  res.send(`
    <h1>Welcome ${req.user.displayName}</h1>
    <img src="${req.user.photos[0].value}">
    <a href="/logout">Logout</a>

    `);
});

app.get("/logout", (req, res) => {
  // req.logout();
  res.redirect("/");
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
