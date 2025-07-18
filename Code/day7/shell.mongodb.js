use product;

product.items.find();
db.items.find({price: {$lt: 100}});
 db.items.find({price: {$gt: 100, $lt: 500}});
  db.items.find({name: 'Smartphone Model X'});
   db.items.find({isFeatured: true});
   