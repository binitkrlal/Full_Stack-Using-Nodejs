  const http = require('node:http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {

  const timeStamp = new Date().toLocaleString();  

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end(`Welcome to Node js\nTime: ${timeStamp}\n`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
