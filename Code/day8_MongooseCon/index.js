const mongoose = require('mongoose');

// for connecting with the local database, give mongodb, the localhost with name of database.
const uri = 'mongodb://127.0.0.1:27017/product';//connecting with local database.

const schema = mongoose.Schema({
    name: String,
    company: String,
    price: Number,
    colors: [String],
    image: String,
    isFeatured: Boolean
});

//here give Item is going to be the collection name where you will perform the query(with first letter capital)
//and the two params---> name of collection in singular with schema name. 
const Item = new mongoose.model("item", schema);

//Performing CRUD Operation using the collection.
async function connectWithMongoDB(uri){
    try{
        console.log("mongoDB connected");
        await mongoose.connect((uri));
        //Read
        // const data = await Item.find({});
        // console.log(data);



        //create
        // const newData = new Item({
        // name:"Smartphone Model X",
        // company:"64c23350e32f4a51b19b9230",
        // price:1600,
        // colors: Array (3),
        // image:"/images/product-smartphone.png",
        // category:"64c2342de32f4a51b19b924e",
        // isFeatured: false
        // });
        // Item.insertMany(newData);
        // const ifExist = await Item.find({price: 1600});
        // console.log(ifExist);
        


        //update
        // await Item.updateMany({price: 1600}, {$set: {price: 1900}});
        // const updatedDocs = await Item.find({price: 1900});
        // console.log(updatedDocs);
        


        //Delete
        await Item.deleteMany({price: 1900});
        const deleted= await Item.find({price: 1900});
        console.log(deleted);
    }
    catch(e){
        console.log(e);
    }
    finally{
        mongoose.connection.close();
    }
}
connectWithMongoDB(uri);
