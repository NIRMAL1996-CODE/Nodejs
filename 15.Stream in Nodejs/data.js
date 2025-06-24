//Create a big file using writeFileSync (ES Modules)
import fs from "fs";

// Step: Write numbers from 0 to 10000 into test.txt
for (let i = 0; i <= 10; i++) {
  // fs.writeFileSync(path, data, options)
  fs.writeFileSync("./hello.txt", `${i}\n`, { flag: "a" }); 

  //`${i}\n`	Data to write (each number in new line)

  // flag: "a" → means append (add to file instead of replacing)
// flag: "a" in fs.writeFileSync
// "a" means append mode
// It adds new data at the end of the file
// It does not remove old data
// Useful for writing logs or adding data in loop
// Without "a" → file gets overwritten (old data erased)
 }
