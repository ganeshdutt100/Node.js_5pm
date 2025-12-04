const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

// app.use(cookieParser());

const hashPassword = async () => {
  const password = "123458";
  const hashed = await bcrypt.hash(password, 10);
  console.log("Hashed Password : " + hashed);
};
hashPassword();

const verifyPassword = async () => {
  const password = "123458";
  const hashPassword =
    "$2b$10$q7czSagEQyy8MqztN3OrdeDLZgs2gHnDihqCJrow85WYN2VTDZs9a";

  const match = await bcrypt.compare(password, hashPassword);
  console.log(match ? "Password Correct" : "Password Wrong");
};
verifyPassword();

app.get("/", (req, res) => {
  res.send("i am home page ");
});

app.listen(4000, () => {
  console.log(`server is running on http://localhost:4000 `);
});
