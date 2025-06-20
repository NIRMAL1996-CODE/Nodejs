// File System - Sync API
import * as fs from "fs";

// Creating Directory 
// fs.mkdirSync("c:\\nodejs\\filesystem");

// Creating Directory - Path not required 
// fs.mkdirSync("c:\\nodejs\\test\\demo", { recursive: true });

// Read content of directory 
// const files = fs.readdirSync("c:\\nodejs\\");
// for (const file of files) {
//   console.log(file);
// }

// Remove Directory 🧹 (must be empty)
// fs.rmdirSync("c:\\nodejs\\fs");

// Create & Write File 
// fs.writeFileSync("readme.txt", "Hello Nodejs");

// Read File 
// const result = fs.readFileSync("readme.txt", "utf-8");
// console.log(result);

// Append data into file ➕
// fs.appendFileSync("readme.txt", "HuXn WebDev");

// Copy File 
// fs.copyFileSync("readme.txt", "info.txt");

// Get file information 
const stats = fs.statSync("info.txt");
console.log(stats.isDirectory()); // false
console.log(stats.isFile()); // true
console.log(stats); // full file info
