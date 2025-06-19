//To use import/export in Node.js:
//Use .js file + add this in package.json

import greet from "./greet.js";
import { p1,p2,p3 } from "./peoples.js";
greet("Nirmal");
console.log(p1, p2, p3);