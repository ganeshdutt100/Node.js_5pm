const express = require("express");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());

// Template Engine
app.set("view engine", "pug");
app.set("views", "./views");

function logTime(req, res, next) {
  console.log(`${new Date().toLocaleString()} ${req.method} ${req.url}`);
  next();
}
app.use(logTime);

// students
const students = [
  {
    id: "101",
    name: "Yogendra",
    age: 20,
    course: "MERN",
  },
  {
    id: "102",
    name: "Aarav",
    age: 20,
    course: "Java",
  },
  {
    id: "103",
    name: "Karan",
    age: 20,
    course: "Python",
  },
];

// Routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home page" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About page" });
});
app.get("/students", (req, res) => {
  res.render("students", { title: "Student list", students });
});
app.get("/student/:id", (req, res) => {
  const student = students.find((s) => s.id === req.params.id);
  if (student) {
    res.render("studentDetails", { student });
  } else {
    res.status(404).send("students not found");
  }
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});
app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
