const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("i am home page ");
});
app.get("/about", (req, res) => {
  res.send("i am about page ");
});
app.get("/contact", (req, res) => {
  res.send("i am contact page ");
});

app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000 `);
});
