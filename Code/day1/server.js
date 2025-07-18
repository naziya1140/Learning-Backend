// const { createServer } = require('node:http');//when you use type: commonjs(default value of type)
// import { createServer } from 'node:http';//when you use type:  module(introduced in es6)

// const hostname = '127.0.0.1';
// const port = 8000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//for type: module.
// import {a} from './mymodule.js';//when you use type: module
// console.log(a);//this is called named export.

// import obj from './mymodule.js';//when you use type: module
// console.log(obj);//this is called default export.

const obj = require('./mymodule.js'); //when you use type: commonjs
console.log(obj); // this will log the object with properties a and b


//any function you are writing gets wrapped in the file 
(function (exports, require, module, __filename, __dirname) {
  // Your code here
  // This is the CommonJS module wrapper
})();