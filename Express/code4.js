const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("i am Front page ");
});
app.get("/home", (req, res) => {
  //   res.send("i am home page ");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000 `);
});
