// const { EventEmitter } = require("stream");

const { readFileSync } = require("fs");

// Event Driven
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("message", () => {
//   console.log("Message Event Triggered ");
// });

// emitter.emit("message");

// Single Threaded
//  V8 Engine , Libuv

// Event loop

// console.log("start");

// setTimeout(() => {
//   console.log("inside timeout");
// }, 0);
// console.log("End");
// file create
//  const data = readFileSync("example.txt", "utf8");
//  console.log(data);
// Async = non - blocking;
// Sync = Blocking;
