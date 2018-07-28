const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5b59ca20bd0e6456bf7dffcb";


Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndDelete({}).then((result) => {
});

Todo.findByIdAndRemove(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found.')
  }
  console.log('Todo by ID', todo);
}).catch((e) => console.log(e));