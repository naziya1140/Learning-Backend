const { MongoClient } = require("mongodb"); 
const uri = 'mongodb+srv://naziyamirza04:FfdM7yNRmeebBfqt@cluster0.sjfdkxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(uri)//Client is a new instance with a lot of methods.

//connect with database.
async function main(){
    await client.connect();//connect with server.
    const db = client.db('product');
    const collection = db.collection('items');

    const showDetail = await collection.aggregate([{
        $group: {_id: null,
            totalProduct: {$sum: 1},
            MaxPrice: {$max: '$price'},
            MinPrice: {$min: '$price'},
            Average: {$avg: '$price'}}
    }]).toArray();
    console.log("Detail of Data: ", showDetail);
    // const data = await collection.find({price: {$gt: 1200}}).toArray();//convert to array as it return json object.
    // console.log(data);
    return "done";
}

main()
.then((res)=>console.log(res))
.catch((e)=> {
    console.log('Some error occured');
    console.log(e);
})
.finally(client.close());
