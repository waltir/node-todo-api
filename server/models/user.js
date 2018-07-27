var mongoose = require('mongoose');

var myDateString = new Date();

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 5,
    trim: true  // trim all leading or trailing white spaces
  }, 
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true
  },
  createdAt: {
    type: Number,
    default: myDateString
  }
});

module.exports = {User};