const http = require('http');
const fs = require('fs');
const url = require('url');

// const myServer = http.createServer((req, res) => {
//     let date = new Date().toLocaleTimeString();
//     let string = `A new request has been received on: ${req.url} at Time: ${date}\n`; 

//     fs.appendFile('log.txt', string, (err) =>{
//         if(err){
//             console.log(err);
//             console.log('An error has been occured.');
//         }
//         else{
//             console.log('successfully appended');
//             switch(req.url.toLowerCase()){
//                 case "/": res.end("Welcome This is Home Page");// '/' represents root.
//                 break;
        
//                 case "/about": res.end('Welcome to About page');
//                 break;
            
//                 case "/contacts":res.end('Welcome to contacts section');
//                 break;
            
//                 default:
//                     res.statusCode = 404;
//                     res.end('404 page not found');//always write this in the end as it marks the completion.
//                     break;
//             }
//         }
//     });
// });

// let port = 3000;
// let x = '127.0.0.1';

// myServer.listen(port, ()=>{
//     console.log('Server Started!!');
//     console.log(`server running at http://${x}:${port}`)
// });


const myServer2 = http.createServer((req, res) => {
    let date = new Date().toLocaleTimeString();
    let string = `A new request has been received on: ${req.url} at Time: ${date}\n`; 
    const myUrl = url.parse(req.url, true);//passing 2nd parameter true gives query in object.
    const myQuery = myUrl.query;//this gives query as an object.
    
    fs.appendFile('log2.txt', string, (err) =>{
        if(err){
            console.log(err);
            console.log('An error has been occured.');
        }
        else{

            console.log('successfully appended');
            console.log(myUrl);
            console.log(myQuery);

            switch(myUrl.pathname){
                case "/": res.end(`Hi ${myQuery.username} this is Home Page\n and this is a ${req.method}`);// '/' represents root.
                break;

                case "/search": res.end(`welcome for searching ${myQuery.searchval}`);
                break; //http://127.0.0.1:8000/search?searchval=tic+tac+toe
            
                case "/contacts":res.end('Welcome to contacts');
                break;

                case "/signup": 
                    if(req.method === "GET"){
                        console.log('getting data from server.');

                    }
                    else if(req.method === "POST"){
                        // perform task, add things in DB
                        console.log("Success");
                    }
            
                default:
                    res.statusCode = 404;
                    res.end('404 page not found');//always write this in the end as it marks the completion.
                    break;
            }
        }
    });
});

let port = 8000;
let ip = '127.0.0.1';

myServer2.listen(port, ()=>{
    console.log('Server Started!!');
    console.log(`server running at http://${ip}:${port}`)
});
