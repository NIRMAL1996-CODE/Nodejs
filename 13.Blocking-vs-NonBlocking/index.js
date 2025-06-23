// ************************************
// 🔒 BLOCKING CODE
// ************************************

// Runs line by line, waits for each step to finish
// console.log("Start");

// alert blocks everything until it's closed
// alert("Block");

// console.log("End");

// Output:
// Start
// [Waits for alert]
// End

// ************************************
// 🔓 NON-BLOCKING CODE
// ************************************

// console.log("Start");

// Runs this after 1 second, doesn't block the rest
// setTimeout(() => {
  // alert("Non-Blocking");
// }, 1000);

// console.log("End");

// Output:
// Start
// End
// [After 1 sec → alert shows]

// ************************************
// 📁 FILE READ – BLOCKING (Synchronous)
// ************************************

// let fs = require("fs");

// console.log("Start");

// Reads file and waits (blocks next line)
// let data = fs.readFileSync("test.txt");

// Converts buffer to string and prints it
// console.log(data.toString());

// console.log("Ended");

// Output:
// Start
// [Reads file]
// File content
// Ended

// ************************************
// 📁 FILE READ – NON-BLOCKING (Asynchronous)
// ************************************

let fs = require("fs");

console.log("Program Start");

// Reads file in background (non-blocking)
fs.readFile("hello.txt", (err, res) => {
  if (err) {
    console.log(err); // if error
  } else {
    console.log(res.toString()); // file content
  }
});

console.log("Program Ended");

// Output:
// Program Start
// Program Ended
// [Then file content appears]
