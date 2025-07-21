import { MongoClient }  from 'mongodb';

//connecting with database.
const uri = "mongodb+srv://naziyamirza04:FfdM7yNRmeebBfqt@cluster0.sjfdkxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function dbConnect(){
    try{
        await client.connect();
        const db = client.db('userdb');//give name of the database.
        const coll = db.collection('data');
        console.log("MongoDB connected");
        return coll;
    }
    catch(e){
        console.log(e);
    }
}
async function getCollection(){
    const collection = await dbConnect();
    return collection;
}

export {
    getCollection,
    dbConnect
}
