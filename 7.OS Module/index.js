// An Operating System (OS) is system software that manages computer hardware and provides services for running applications.
// os is a built-in Node.js module that provides methods to get system-related information such as OS type, CPU details, memory usage, and network interfaces.

import os from "os";

// Platform info 
console.log(os.platform()); // e.g., 'win32', 'darwin'

// CPU architecture 
console.log(os.arch()); // e.g., 'x64'

// CPU info 
console.log(os.cpus()); // array of core details

// Device name 
console.log(os.hostname()); // PC name

// Home directory 
console.log(os.homedir()); // user's home folder path

// Network info 
console.log(os.networkInterfaces()); // IP, MAC, etc.

// Free memory 
console.log(os.freemem()); // in bytes

// Total memory 
console.log(os.totalmem()); // in bytes
