// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj + ' | ' + obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');
  // db.collection('Todos').find({type: 'user'}).toArray().then((docs) => {
  //   // console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  // client.close();

  db.collection('Users').find({name: 'Fred Lyons'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });
    client.close();
});