import express from 'express';
const app = express();


//assigning the port and localhost.
let PORT = 8000;
let localhost = '127.0.0.1';


//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));


//setting view engine ejs type.
app.set('view engine', 'ejs');


// connecting with router
import mainRouter from './routes/index.js';
import usersRouter from './routes/users.js';
app.use('/', mainRouter);
app.use('/users', usersRouter);


//Binding with port.
app.listen(PORT, ()=> {
    console.log(`Sever running at: http://${localhost}:${PORT}`);
})