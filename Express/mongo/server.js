const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// mongoDB
mongoose
  .connect("mongodb://localhost:27017/node_1pm")
  .then(() => {
    console.log("MongoDB Connected Successfully ✔️");
  })
  .catch((err) => {
    console.log("Connection Error ❌ : ", err);
  });

//   Schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const User = mongoose.model("User", UserSchema);

app.post("/api/save", async (req, res) => {
  try {
    const { username, email } = req.body;

    const newUser = new User({ username, email });
    await newUser.save();
    res.status(201).json({ msg: " Data Saved Successfully!✔️" });
  } catch (err) {
    res.status(500).json({ err: " Failed to save data ❌" });
  }
});

app.listen(3000, () => {
  console.log("Server running start at http://localhost:3000");
});
