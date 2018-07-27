// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

// var myDateString = new Date();

// var User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     minlength: 5,
//     trim: true  // trim all leading or trailing white spaces
//   }, 
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true
//   },
//   createdAt: {
//     type: Number,
//     default: myDateString
//   }
// });

// var user1 = new User ({
//   email: 'jeff@daniels.com',
//   password: 'test123'
// })

// user1.save().then((doc) => {
//   console.log('Saved user', doc)
// }, (e) => {
//   console.log('Unable to save user');
// });
