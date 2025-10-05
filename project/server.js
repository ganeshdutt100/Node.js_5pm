const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
const PORT = 3000;

const server = http.createServer((req, res) => {
  //server html form
  if (req.method === "GET" && req.url === "/") {
    const filePath = path.join("index.html");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Internal Server Error </h1>", err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
