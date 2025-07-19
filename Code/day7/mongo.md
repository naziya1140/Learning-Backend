## Basic Commands in MongoDB.

### Basic Commands.
1. show db/databases
2. use <database_name>
3. db.dropDatabase --> db represents the current database
4. show collections --> shows the collection of a database.
5. db.create collections('coll_name') --> creating a new Collection
6. db<collection_name>.drop();


### CRUD Operation(create read update delete)
1. db.<collection_name>.insertOne({field: value})
2. db.<collection_name>.insertMany([{field: value}, {field: value}])
3. db.<col_name>.find()---> list all the values of the collection.
4. db.<col_name>.findOne({key : value})--->finding single value that satisfies the value.


## good practice is to write the field value in quotes.
## MongoDB is case sensitive.

## ordered Input: stops at the first error. (ordered is true by default).
==> db.<collection_name>.insertOne({field: value})

## unordered Input: all the values except the erronous value will be added.
==> db.<collection_name>.insertMany([{field: value}, {field: value}, {ordered: false}])

## For importing or exporting--> exit the mongo shell
mongoimport filePath -d <db_name> -c <collection_name>;
mongoexport filename -d <db_name> -c <collection_name> -o filePath;



## comparison Operator
1. $eq --> equal to
2. ne --> not equal
3. gt --> greater than
4. gte --> greater than equal to 
5. lt --> less than
==> command: db.<col_name>.find('price' : {$gt: 100});
==> command: db.<col_name>.find('price': {$lt: 120});



## cursor method
count()---> count the number of entities.
limit(5)---> only given number of values will be printed.
skip(4)---> skipping values while printing
sort({field : 1})
sort({field: -1})
1 for ascending sorting and -1 for descending sort 



## Logical Operator
$and, $or, $not, $nor
{$and : [{condition1}, {condition2}....]}---> array of conditions.
eg---> 
==> db.data.find({ color: { $not: { $eq: '#813519' } } });
==> db.data.find({$and: [{'price ': {$gt: 10}}, {'color': '#813519'}]});
==> db.product.find({{'price': {$gt: 0}}, 'name': 'xyz'})---> even this works as and.
==> nor means every values expect given value.



# complex expression.
this is basically used when you want to do some operations on the field of a particular documnets.
For eg. multiply 2 values and matching it with another value.
db.sales.find({ $expr : {$lt: [{$multiply: ['$quantity', '$price']}, 'targetPrice' ] } } ).count();



## element Operator.
==> db.data.find({'price ': {$exists: 'true'}})---> to check if a field exist or not.
==> db.data.find({'price': {$type : 'string'}})---> to check the datatype of a field(It has number number mapped with datatype as well.)
==> db.comments.find({'comments': {$size: 2}})---> Checking the size of Array.



## Projection(Inclusion and Exclusion)
Here the first curly brackets represents the condition and second shows the field you want to include.
-> 1 for including and 2 for excluding.
You can't use 1 and 0 simultaneously except for id.
==> db.<col_name>.find({name: 'xyz'}, {name: 1, class: 1, id: 0});
==> db.<col_name>.find({name: 'xyz'}, {name: 0, class: 0, id: 1});



## Embedded Documents.
Query documents inside embedded document using dot notation.
==> db.data.find({'comments.user': 'lily'});
If there are multiple condition then do not use second curly brackets as it is for showing inclusion/exclusion.
==> db.data.find({'comments.user: 'lily', isFeatured: true});//comma seperated functions.



## $expr
db.sales.find({$expr: {$gt: [{$multiply: ['$price ','$quantity']}, '$targetPrice'] } } );

## Update operation 
==> db.data.updateOne({condition}, {$set: {fieldName: newValue}});
==> db.data.updateOne({_id: ObjectId('68762bd0d341d3df6f105eea')}, {$set : {'price ':129.99, 'price ': 34}});
both the above method can be used to add a new field.

==> db.data.updateMany({}, {$rename: {'price ': 'newName'}});
==> db.data.updateOne({_id: 3}, {$unset: {fieldName: 1}});//field value which you want to remove.
==> db.data.updateMany({_id: 3}, {$unset: {fieldName2: 1, fieldName2: 1}});



## updation in embedded objects.
1. db.comments.updateOne({_id: 6}, {$push: {comments: {user: 'Eva', text: 'Hello!'}}});
2. db.comments.updateOne({_id: 6}, {$pop: {comments: 1}});
Above two query shows doing changes in array.
### here the dollar operator means positioning operator that gives the index of whichever value you have selected. 
db.comments.updateOne({_id: 7, 'comments.user': 'Alice'}, {$set: {'comments.$.text': 'Awesome Mirza'});



## $all and $elemMatch.
==> db.<collection_name>.find({field_name: {$all: ['zain', 'zahan', 'ziya']}})---> return back all with this value.
==> db.<collection_name>.find({field_name: {}})



## delete Operation 
db.data.deleteOne({name: 'xyz'})---> deleting first document that satisfies the value.
db.data.deleteMany({name: 'zxy', class: 12})---> deleting multiple documents.



## Indexing.
without indexing.
### db.data.find({name: 'Air Fryer'}).explain()---> gives details about the execution.
stage: 'COLLSCAN',
filter: { name: { '$eq': 'Asus ZenBook' } },
direction: 'forward'

### db.data.find({name: 'Air Fryer'}).explain('executionStats')
exeStats will give more details about the execution.
db.data.find({company: 'BLU'}).explain('executionStats');
nReturned: 38,
executionTimeMillis: 1,
totalKeysExamined: 0,
totalDocsExamined: 1010,

using indexing.
db.data.createIndex({companies: 1});
db.data.getIndexes();

## Avoid making indexing in following cases: 
--> when the collection is small.
--> when the field is rarely used.
--> If more than 60% of the data returned, don't use indexing.


# Aggregation
It is basically used for chaining, when you want to use pipeline or filteration, results from one query can be passed to another query. 

db.items.aggregate([{$group: {_id: '$name', totalcost: {$sum: '$price'}, Avg: {$avg: '$price'}, noOfElement: {$sum: 1} } } ] );

db.items.aggregate([{$match: {price: {$gt: 1200} } }, {$group: {_id: '$company', totalPrice: {$sum: '$price'} } } ] )

db.items.aggregate([{$match: {price: {$gt: 1200}}}, {$group: {_id: '$price', color: {$push: '$colors'}}}]);
[
  {
    _id: 1999,
    color: [
      [ '#000000', '#cc6600', '#663300' ],
      [ '#000000', '#cc6600', '#663300' ]
    ]
  },
  { _id: 1299, color: [ [ '#333333', '#cccccc', '#00ff00' ] ] }

]

## match
## project
## push
## AddtoSet: 
## unwind
## 

//use of unwind and addtoSet.
 db.items.aggregate([{$match: {price: {$gt: 900}}},{$unwind: '$colors'}, {$group: {_id: '$price', colorList: {$addToSet: '$colors'}}}, {$project: {_id: 1, colorList: 1, totalLength: {$size: '$colorList'}} } ] );


you can also use $limit and $skip in a separate {}.

 db.items.aggregate([{$match: {price: {$gt: 900}}},{$unwind: '$colors'}, {$group: {_id: '$price', colorList: {$addToSet: '$colors'}}}, {$project: {_id: 1, totalLength: {$size: '$colorList'}} }, {$skip: 10} ] );

$filter is used on the elements of array.
Returns an array with only those elements that match the condition. 
db.col.aggregate( [ { $project: { name: 1, values: {$filter: {input: '$values', as: 'val', cond: {$gte: ['$$val', 30] } } } } } ] );