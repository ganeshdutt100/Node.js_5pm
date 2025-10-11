// const { EventEmitter } = require("stream");

// Event Driven
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message", () => {
  console.log("Message Event Triggered ");
});

emitter.emit("message");
