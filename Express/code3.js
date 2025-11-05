// Middleware
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
// app.use((req, res, next) => {
//   console.log("middleware -2 chalu hua 🏃‍➡️");
//   next();
// });
// app.get("/", (req, res) => {
//   res.send("i am home page ");
// });
// app.get("/about", (req, res) => {
//   res.send("i am about page ");
// });

function checkAuth(req, res, next) {
  const token = req.query.token;
  if (token === "123") {
    next();
  } else {
    res.send("unauthorized ❌");
  }
}

app.use("/secret", checkAuth);

app.get("/secret", (req, res) => {
  res.send("Welcome to secret page ㊙");
});

app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000 `);
});
