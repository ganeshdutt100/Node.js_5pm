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
  } else if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
      //   console.log(body);
    });
    req.on("end", () => {
      const parsedData = querystring.parse(body);
      const output = `Name  : ${parsedData.name} , Email : ${parsedData.email}\n`;
      //   console.log(output);

      fs.appendFile("data.txt", output, (err) => {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Data Submitted Successfully </h1>");
        }
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found </h1>");
  }
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
