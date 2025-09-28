const http = require('http');
const fs = require('fs');

const PORT  = 4000;
const server  = http.createServer((req,res)=>{

     fs.readFile('example.txt','utf-8',(err,data)=>{
        if(err){
            console.log("file read err : ",err);
            return;
        }
        console.log('File data read successfully :  ', data);
        
     })
     

    //  fs.writeFile('example.txt', 'Hello world', (err)=>{
    //     if(err){
    //         console.log("file write err : ", err);
    //         return;
    //     }
    //     console.log("File written successfully");
        
    //  })




    // res.writeHead(200,{"Content-Type":"text/plain"})
    res.setHeader("Content-Type","text/html")
     res.end("<h3> Hello Node.js </h3>")

})
server.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    // console.log("Server running on http://localhost:3000");
    
})

// FileSystem
// In Node.js, the file system (fs) is a built-in module that gives you the ability to interact with files and directories. This module helps you perform operations such as reading, writing, updating, deleting, and managing files. The fs module in Node.js supports both synchronous and asynchronous operations.