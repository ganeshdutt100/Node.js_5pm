const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url);

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page </h1>");
  } else if (url === "/about" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About  Page </h1>");
  } else if (url === "/contact" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Contact  Page </h1>");
  } else if (url === "/project" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Project  Page </h1>");
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found </h1>");
  }
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
