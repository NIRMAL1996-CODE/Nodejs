// 1️ Importing required modules
import http from "http"; // for creating server
import fs from "fs";     // for reading files (home.html, about.html)

// 2️ Creating server
const server = http.createServer((req, res) => {
  
  // 3️ If request URL is "/", show home page
 if (req.url === "/") {
  //  Check if the URL is home page ("/")

  res.writeHead(200, "OK", { "Content-Type": "text/html" });
  //  Set status 200 (OK) and tell browser the content is HTML

  fs.readFile("./public/home.html", (error, data) => {
    //  Read the home.html file from public folder

    if (error) throw error;
    //  If file reading fails, throw the error

    res.end(data);
    // If file reading is successful, send it to browser and end response
  });

  // 4️ If request URL is "/about", show about page
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (error, data) => {      // read about.html
      if (error) throw error;
      res.end(data); // send file content as response
    });

  // 5️ For any other URL, show 404 page
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" }); // error header
    res.end("<h3> 404 Page Not Found :( </h3>");                // show error message
  }
});

// 6️ Start the server at port 8000
server.listen(8000, () => console.log("Server running on port 8000"));
