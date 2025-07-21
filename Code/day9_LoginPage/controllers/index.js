//importing mongoDB model.
import { getCollection, dbConnect } from '../models/index.js';

//Data Validation: user already exist in database, password matching and isLoggedIn false.
async function validation(req, res){
    const {name, email, password} = req.body;
    
    //calling function for database connection.
    if(!name || !email || !password){
        res.status(400);
        res.render("login", {message: "Enter all Fields"});
    }
    
    else{
        const coll = await getCollection();
        const userData = await coll.findOne({email});
        console.log(userData);

        //if the user exist then add that data into the table and set it value active.
        if(userData){
            if(userData.name != name){
                res.status(400);
                res.render("login", {message: "Wrong Username"});
            }
            else if (userData.password != password){
                res.status(400);
                res.render("login", {message: "Wrong Password"});
            }
            else{
                //every detail is correct, update the login Value and display it.
                try{
                    await coll.updateOne({ email }, { $set: { isLoggedIn: true } });
                    const active = await coll.find({isLoggedIn: true}).toArray();
                    console.log(active)
                    res.status(200);
                    res.render("activeUser", {user: active});
                }
                catch{
                    console.log("Unable to Fetch data");
                }
            }
        }
        else{
            //user does not exist.
            res.status(200);
            res.render("login", {message: "User does not exist."});
        }
    }
}

async function renderMainPage(req, res){
    return res.render("login", {message: null});//ejs page getting rendered.
}

export {
    renderMainPage,
    validation
}