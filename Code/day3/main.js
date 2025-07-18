const http = require('http');//importing module to import data.

const port = 3000;
const host = '127.0.0.1';

//It creates a server that takes a callback function(called a handler) which handles what will happen
//when a request will be made and result will be given back.
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');//passing the data.
});


server.listen(port, () => {
    console.log(`server running at http://${host}:${port}`);//binds the server with given port, whenever a request will be made on the particular port, it will be executed. 
});





