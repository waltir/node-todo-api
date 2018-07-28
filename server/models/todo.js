var mongoose = require('mongoose');

var myDateString = new Date();

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true  // trim all leading or trailing white spaces
  }, 
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: myDateString
  },
  note: {
    type: String,
    default: '',
    trim: true 
  }
});

module.exports = {Todo};