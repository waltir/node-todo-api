const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

    // DELETE MANY
    db.collection('Todos').deleteMany({
      test: 'Eat lunch'
    }).then((result) => {
      console.log(result);
    });

    // DELETE ONE
    db.collection('Todos').deleteOne({
      test: 'Eat lunch'
    }).then((result) => {
      console.log(result);
    });

    // FIND ONE AND DELETE
    db.collection('Todos').findOneAndDelete({
      completed: false
    }).then((result) => {
      console.log(result);
    });

    // Remove all users named Mike Jones
    db.collection('Users').deleteMany({name: 'Mike Jones'});
    // Remove specific user using ID
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b573565bab8073ecc8cd160")});

  client.close();
});