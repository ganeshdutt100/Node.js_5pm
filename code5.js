const http = require("http");
const PORT = 4000;
const server = http.createServer((req, res) => {
  //   console.log("URL :  ", req.url);
  //   console.log("Method :  ", req.method);
  //   console.log("Header :  ", req.headers);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h2> Hello node.js </h2>");
  res.end();
  // req , res
  //   res.end("Hello Node.js");
});
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
