const fs = require('fs');

// try{
//   const data =   fs.readFileSync('example2.txt','utf-8')
//     console.log(data);
    
// }
// catch(err){
//     console.log(err);
    
// }
// try{
// fs.writeFileSync('example2.txt',"Hello Node.js with example 2");
// console.log('file written successfully');

// }catch(err){
// console.log(err);

// }

// Append 
// try{
//     fs.appendFileSync('example2.txt',"  \n Appended text");
//     console.log('file appended successfully');
// }catch(err){
//     console.log(err);
// }

// rename
// try{
//     fs.renameSync('example2.txt','code2Data.txt');
//     console.log('file renamed successfully');
// }catch(err){
//     console.log(err);
// }


// fs.rename('code2Data.txt','example2.txt',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('file renamed successfully');
// })

// fs.unlink('example2.txt',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('File deleted successfully');
    
// })

// fs.mkdir('exampleFolder',(err)=>{
// if(err) throw err;
// console.log('Folder Created');

// })