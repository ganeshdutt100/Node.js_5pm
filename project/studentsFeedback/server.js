// http
// fs
// path
// url

const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");
const { stringify } = require("querystring");
const PORT = 3000;

// helper function
function serverFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHeader(404);
      res.end("File not found");
    } else {
      res.writeHeader(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

// createServer
const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const method = req.method;

  if (req.url === "/" && method === "GET") {
    serverFile(res, path.join(__dirname, "public", "index.html"), "text/html");
  } else if (res.url === "/style.css") {
    serverFile(res, path.join(__dirname, "public", "style.css"), "text/css");
  } else if (res.url === "/main.js") {
    serverFile(
      res,
      path.join(__dirname, "public", "main.js"),
      "text/javascript"
    );
  } else if (req.url === "/submit" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const formData = new URLSearchParams(body);
      const feedback = {
        name: formData.get("name"),
        email: formData.get("email"),
        feedback: formData.get("feedback"),
      };

      let existing = [];
      if (fs.existsSync("data.json")) {
        const fileContent = fs.readFileSync("data.json", "utf-8");
        if (fileContent.trim() !== "") {
          try {
            existing = JSON.parse(fileContent);
          } catch (err) {
            console.log("Error parsing JSON:", err);
            existing = [];
          }
        }
      }
      existing.push(feedback);

      fs.writeFileSync("data.json", JSON.stringify(existing, null, 2));
      res.writeHead(302, { location: "/list" });
      res.end();
    });
  } else if (req.url === "/list") {
    let data = [];
    if (fs.existsSync("data.json")) {
      const fileContent = fs.readFileSync("data.json", "utf-8");
      if (fileContent.trim() !== "") {
        try {
          data = JSON.parse(fileContent);
        } catch (err) {
          console.log("Error parsing JSON:", err);
          data = [];
        }
      }
    }

    let html = ` 
     <html>
     <head>
        <title>Feedback List</title>
        <link rel="stylesheet" href="/style.css">
     </head>
     <body>
        <h1>Feedback List</h1>
        <ul>
            ${
              data.length > 0
                ? data
                    .map(
                      (item) =>
                        `<li>${item.name} - ${item.email} - ${item.feedback}</li>`
                    )
                    .join("")
                : "<p>No Feedbacks</p>"
            }
        </ul>
        <a href="/">Go Back</a>
     </body>
    `;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else {
    res.writeHead(404);
    res.end("404 page not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
