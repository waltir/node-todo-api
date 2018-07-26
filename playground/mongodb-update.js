const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

    // DELETE MANY
    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5b5725dbc0a52430b3c489e0')
    }, {
      $set: {
        age: 18
      }
    }, {
        returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  client.close();
});