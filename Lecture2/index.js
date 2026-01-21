// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 5000;
// const server = http.createServer((req, res) => {

//   const timeStamp = new Date().toLocaleString();  

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');

//   res.end(`Welcome to Node js\nTime: ${timeStamp}\n`);

// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const http = require("node:http");
// const fs = require("fs");

// const timeStamp = new Date().toLocaleString();
// console.log(timeStamp);
// const hostname = "127.0.0.1";
// const port = 7000;

// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<h1>This is my home page<h1>")
//     } if (req.url == "/about") {
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<h1>This is my about us page<h1>");
//     }
//     res.end();
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// server.on("error", err => {
//     if (err.code === "EADDRINUSE") {
//         console.log("Port 3000 is already in use. Close the other server first.");
//         process.exit(1);
//     }
// });