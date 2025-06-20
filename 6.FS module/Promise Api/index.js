// fs promise API
// import * as fs from "fs/promises";

// Creating Directory - Path should be there. 
// try {
//   await fs.mkdir("c:\\nodejs\\fs");
//   console.log("Directory Created ...");
// } catch (error) {
//   console.log(error);
// }

// Path is not required 
// try {
//   await fs.mkdir("c:\\nodejs\\fs\\index", { recursive: true }); // recursive makes all folders if missing
//   console.log("Directory Created ...");
// } catch (error) {
//   console.log(error);
// }

// Read content of directory 
// try {
//   const files = await fs.readdir("c:\\nodejs\\fs\\hello");
//   for (let file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

// Remove Directory 
// try {
//   await fs.rmdir("c:\\nodejs\\fs\\hello"); // only works if folder is empty
//   console.log("Directory Removed...");
// } catch (error) {
//   console.log(error);
// }

// Create and Write File 
// try {
//   await fs.writeFile("readme.md", "Hello Nodejs :)"); // creates or replaces file
//   console.log("File Written...");
// } catch (error) {
//   console.log(error);
// }

// Read File 
// try {
//   const data = await fs.readFile("readme.md"); // returns buffer (raw binary data)
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const data = await fs.readFile("readme.md", "utf-8"); // Actual text data
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// Append Data Into File 
// try {
//   await fs.appendFile("readme.md", "\nHello HuXn"); // adds content at the end
//   console.log("Data Appended...");
// } catch (error) {
//   console.log(error);
// }

// // Copy File 
// try {
//   await fs.copyFile("readme.md", "info.txt"); // copies content to new file
//  nsole.log("File Copied");
// } catch (error) {
//   console.log(error);
// }

// Get File Information 
// try {
//   const info = await fs.stat("info.txt"); // gives details like size, type etc.
//   console.log(info.isDirectory()); // false
//   console.log(info.isFile()); // true
// } catch (error) {
//   console.log(error);
// }
