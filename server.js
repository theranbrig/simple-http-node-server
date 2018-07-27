const http = require('http');
const hello = require('./hello');
const port = 3000;

// Handle HTTP request.
const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`)
};

// Create server and pass in request handler function
const server = http.createServer(requestHandler);


hello.sayHello();


// Start server on port 3000
server.listen(port, (err) => {
  if (err) {
    return console.log(`You have error: ${err}`);
  }
  console.log(`Server is listening on ${port}`);
})
