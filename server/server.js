var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();


app.use(bodyParser.json());
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(e);
  });
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

// var myDateString = new Date();

// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true  // trim all leading or trailing white spaces
//   }, 
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: myDateString
//   }
// });

// var newTodo1 = new Todo ({
//   text: 'Walk Dog',
//   completed: true,
// })

// newTodo1.save().then((doc) => {
//   console.log('Saved todo', doc)
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var newTodo = new Todo ({
//   text: 'Cook dinner'
// })

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc)
// }, (e) => {
//   console.log('Unable to save todo');
// });