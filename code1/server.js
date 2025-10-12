const http = require("http");
const server = http.createServer((req, res) => {
  // res.writeHead(200,{"Content-Type":"text/plain"})
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node.js</title></head>");
  res.write(`<body>
    <h1>Node.js</h1>
     <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
    </body>`);

  res.write("</html>");
  res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
