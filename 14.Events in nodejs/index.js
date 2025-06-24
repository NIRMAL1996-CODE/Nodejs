// ✅ Let's learn Events in Node.js step-by-step

// Step 1: Import the 'events' module (built-in in Node.js)
// const EventEmitter = require("events");
import { EventEmitter } from "events";

// Step 2: Create an instance of EventEmitter
const customEmitter = new EventEmitter();

// Step 3: Listen to an event using .on()
// This will run when the event named "response" is triggered
customEmitter.on("response", (name, id) => {
  console.log(`Data received: user ${name} with ID ${id}`);
});

// Step 4: You can add more listeners to the same event
customEmitter.on("response", () => {
  console.log("Running some extra logic for response event");
});

// Step 5: Emit the event
// This triggers all the listeners of the "response" event
customEmitter.emit("response", "john", 34);
