// Importing the HTTP module to create a server
import http from "http";

// Creating a server using createServer method
const server = http.createServer((req, res) => {
  // req → incoming request info (like url, method, headers)
  // res → used to send response back to browser

  // Set response status code, status message & headers all at once
  res.writeHead(202, "Good", { "Content-Type": "text/plain" });

  // Send back plain text as response and end the response
  res.end("<h1>Hello World </h1>");
});

// Start the server and make it listen on port 8000
server.listen(8000, () => console.log(`Server running on port 8000`));
