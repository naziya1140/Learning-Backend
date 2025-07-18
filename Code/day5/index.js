let express = require('express');
// let http = require('http');---> don't need this if you use express js.

// let server = http.createServer(app);---> no need to write when you are using express.
const app = express();//express gives a handler function that is passed to createServer 

app.get("/", (req, res) => {
    res.end(`Welcome ${req.query.name}`);
});
app.get("/about", (req, res)=>{
    return res.send(`Name: ${req.query.name}\n Age: ${req.query.age}`);
});
//the app.get takes route and a callback function.

//two ways of returning
// -->res.end('no need to return')
// -->return res.send('return the value as well as end it.')

app.listen(8000, ()=>console.log(`Server Started`));//binding the function with the current port.
