// ✅ Streams in Node.js (with ES Modules)
// Streams help in reading large files chunk-by-chunk (not all at once)

// Whole module
// import fs from "fs";
// fs.createReadStream();

// So why not always use import fs from "fs"?
// Because:
// Cleaner code — only use what you need
// Less memory — smaller import
// Easier to read — no need to write fs. again and again

// Only one function
import { createReadStream } from "fs";

// Step 1: Create a readable stream
// This stream will read test.txt file in small chunks
// Optional: add encoding (utf8) to get actual text
//syntax const variableName = createReadStream(filePath, options);
//"./hello.txt"	path to the file
//{ encoding: "utf8" }	read as text, not binary


const stream = createReadStream("./hello.txt", { encoding: "utf8" });

// Step 2: Listen for 'data' event (fires every time a chunk is ready)
//syntax: stream.on(eventName, callback);
//It still works! Because:
//"data" is fixed (event name)
//chunk or data is your variable

stream.on("data", (data) => {
  console.log(data); // Print the chunk of data
});

// Step 3: Listen for 'error' event (in case file not found or any issue)
//Part	Meaning
//"error"	Event name — fires if something goes wrong
//err	Variable holding the actual error info


stream.on("error", (err) => {
  console.log("❌ Error reading file:", err.message);
});
