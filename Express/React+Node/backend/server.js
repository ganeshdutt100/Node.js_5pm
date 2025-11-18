const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Simple GET API
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from backend",
  });
});

// Simple POST API
app.post("/api/user", (req, res) => {
  const { name } = req.body;
  res.json({
    message: `Hello from backend, you sent: ${name}`,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// React(Frontend)  ---> HTTP(Request) -> Node/Express(Backend) ->Response(React show)
