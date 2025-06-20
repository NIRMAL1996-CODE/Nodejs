//URL is a built-in class in Node.js used to parse and work with web URLs.
//It helps break a URL into parts like host, path, query, hash, etc.
//toString() and toJSON() both return the full URL string.

import { URL } from "url";

const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

console.log(myURL.hash);          // #hash
console.log(myURL.host);          // www.example.com:8080
console.log(myURL.hostname);      // www.example.com
console.log(myURL.href);          // full URL
console.log(myURL.pathname);      // /p/a/t/h
console.log(myURL.port);          // 8080
console.log(myURL.protocol);      // https:
console.log(myURL.search);        // ?query=string
console.log(myURL.searchParams);  // URLSearchParams object

console.log(myURL.toString());    // full URL
console.log(myURL.toJSON());      // full URL (same as toString)
