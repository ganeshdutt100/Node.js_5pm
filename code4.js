// const buffer = Buffer.from("Hello world");
// console.log(buffer);
// console.log(buffer.toString());

const fs = require("fs");

const readStream = fs.createReadStream("example2.txt");
const writeStream = fs.createWriteStream("copyExample2.txt");
readStream.pipe(writeStream);
console.log("file copying started... ");

writeStream.on("finish", () => {
  console.log("file copying completed successfully");
});
// console.log(readStream);

// const writeStream = fs.createWriteStream("example2.txt");
// writeStream.write("Hello Node.js \n");
// writeStream.write("Hello World");
// writeStream.end();

// writeStream.on("finish", () => console.log("file writing completed"));
// writeStream.on("error", (err) => console.log(err));

// const readStream = fs.createReadStream("example.txt", "utf8");
// readStream.on("data", (chunks) => {
//   console.log("New Chunk Received");
//   console.log(chunks);
// });

// readStream.on("end", () => {
//   console.log("file reading completed");
// });

// readStream.on("error", (err) => console.log(err));
