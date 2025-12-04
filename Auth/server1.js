const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("i am home page ");
});
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "Ganesh Dutt");
  res.send("Cookie set Successfully");
});
app.get("/get-cookie", (req, res) => {
  res.send(req.cookies);
  console.log(req.cookies);
});
app.get("/delete-cookie", (req, res) => {
  res.clearCookie("username");
  console.log(req.cookies);
  res.send("Cookie deleted Successfully");
});

app.listen(4000, () => {
  console.log(`server is running on http://localhost:4000 `);
});
