const express = require('express');
const mongoose = require("mongoose");
const fs = require('fs');

const data = require('./MOCK_DATA.json');
const PORT = 8000;

const app = express();//creating handler function

//creating a schema according to your data.
const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    }, 
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    job_title: {
        type: Stiri
    }
});
//connecting mongoose, we have got the url from mongo Shell.
//This connect will return a promise.
mongoose.connect('mongodb://127.0.0.1:27017/learning')
.then(()=>console.log("MongoDB connected"))
.catch(()=>console.log())

//creating a model.
//Here the first parameter is a name for the model while the second parameter is the schema
const User = mongoose.model("user", userSchema)

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
app.post('/api/users', async (req, res) => {
    let newData = req.body;
    console.log(newData);

    if(
        !body || !body.firstName || !body.lastName || 
        !body.email || !body.gender || !body.job_title
    ){
        return res.status(400).json({msg: "All "})
    }

    await User.create({
        firstName = body.firstName,
        lastName = body.lastName,
        email = body.email,

    })



    
});

//Binding handler function with correct port.
app.listen(PORT, ()=>{
    console.log('Server started!');
});

