const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("i am home page ");
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash("Ganesh", salt, function (err, hash) {
//       console.log(hash);
//     });
//   });

//   bcrypt.compare(
//     "GaneshDutt",
//     "$2b$10$AlDQ2BE96Px6cbVt2ml/.uCQKidzfcjuawDxV8xoVpciTN9GfyXg6",
//     function (err, result) {
//       // result == true
//       console.log(result);
//     }
//   );
// });

app.get("/", (req, res) => {
  let token = jwt.sign({ email: "ganesh@gmail.com" }, "secret");
  res.cookie("token", token);
  console.log(token);
  res.send("data");
});

app.get("/read", (req, res) => {
  //   console.log(req.cookies.token);
  let decoded = jwt.verify(req.cookies.token, "secret");
  console.log(decoded);
  res.send("read");
});
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhbmVzaEBnbWFpbC5jb20iLCJpYXQiOjE3NjUyODc1MzR9.XbnJKdSfzGQm_fz0FXNrinmyaW6vI2i8k1h_hxmGt7k

app.listen(4000, () => {
  console.log(`server is running on http://localhost:4000 `);
});
