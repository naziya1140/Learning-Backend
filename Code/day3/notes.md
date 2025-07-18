Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser

Node.js are written using non-blocking paradigms.

const http = require('http');
const port = 3000;
const host = '127.0.0.1';
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
server.listen(port, () => {
    console.log(`server running at http://${host}:${port}`);
});

Here, http is a module having method createServer that takes two params, one representing the request while other representing response, in the response set details like status code, end(content).
It will return a server, when the server will be ready, the callback function in the 



