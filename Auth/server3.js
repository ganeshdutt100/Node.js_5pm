const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("i am home page ");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("Error ", error));

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT} `);
});
