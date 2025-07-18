const express = require('express');
const data = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();//creating handler function

//adding a middleware plugin
app.use(express.urlencoded({extended: false}));
app.use((req, res, next)=>{
    req.topic = "middleWare";//this will be reflected throughout.
    console.log("First MiddleWare Executed");
    next();
});
app.use((req, res, next)=>{
    console.log("Second MiddleWare Executed!");
    console.log(req.topic);
    next();
});
console.log('After executing all middlewares');


app.get('/users', (req, res) => {
    //Iterating entire entry points of html and adding it to the list.
    const html = `<ul>
        ${data.map((el)=>{
            return `<li>${el.first_name}</li>`
        }).join('')}
    </ul>`
    return res.send(html);//passing a html file.
});

app.get('/api/users', (req, res) => {
    res.json(data);//entire data will be displayed in json format.
});

//all the route for post, patch and delete is same so it can be done using another way.
// app.post('/api/users/:id', (req, res)=>{
//     res.end("A post request has been received.");
// });

// app.patch('/api/users/:id', (req, res)=>{
//     res.end("A patch request has been received.");
// });

// app.delete('/api/users/:id', (req, res)=>{
//     res.end(`A delete request for user ${req.params.id} request has been received.`);
// });

app.
route('/api/users/:id')
.get((req, res) => {
    let id = req.params.id;//extracting id
    data.forEach(el => {
        if(el.id == id){
            res.json(el);
        }
    });
})
.patch((red, res)=>{
    //update entry point of given id.
})
.delete((req, res) =>{
    //delete a entry point of given id.
})


// we will make post request using POSTMAN
app.post('/api/users', (req, res) => {
    let newData = req.body;
    console.log(newData);

    data.push({ ...newData, id: data.length + 1 });
    console.log(data);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log("Error Occurred");
            res.status(500).send("Failed to write data.");
        } else {
            console.log("Data Appended");
            res.status(201).send("User added successfully.");
        }
    });
});

//Binding handler function with correct port.
app.listen(8000, ()=>{
    console.log('Server started!');
});