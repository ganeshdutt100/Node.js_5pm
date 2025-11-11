const express = require("express");
const app = express();

// app.use(express.static("public"));
// app.set("view engine", "ejs");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("i am Front page ");
});
// app.get("/home", (req, res) => {
//   //   res.send("i am home page ");
//   res.sendFile(__dirname + "/public/index.html");
// });

app.get("/profile", (req, res) => {
  const userProfile = {
    name: "Yogendra",
    age: 20,
    jobTitle: "Frontend Developer",
  };
  res.render("index", { userProfile });
});

app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000 `);
});
