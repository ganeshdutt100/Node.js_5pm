const http = require('http');
const PORT  = 4000;
const server  = http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type":"text/plain"})
    res.setHeader("Content-Type","text/html")
    res.write('<html>')
    res.write('<head><title>Node.js</title></head>')
    res.write('<body><h1>Node.js</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    // console.log("Server running on http://localhost:3000");
    
})
