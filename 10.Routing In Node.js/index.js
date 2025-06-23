// 1. Importing http module to create server
import http from "http";

// 2. Creating a server using http.createServer()
const server = http.createServer((req, res) => {
  
  // 3. If URL is root "/", send Home response
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" }); // set status and type
    res.end("<h1> Home </h1>"); // send response to browser
  } 
  
  // 4. If URL is "/about", send About response
  else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h2> About </h2>");
  } 
  
  // 5. If URL is anything else, show 404 error
  else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end("<h3> 404 Page Not Found :( </h3>");
  }
});

// 6. Start server on port 8000 and log message
server.listen(8000, () => console.log("Server running on port 8000"));
