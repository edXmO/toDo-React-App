const mongoose = require('mongoose');
const db = require('./models/');

mongoose.connect('mongodb://localhost/todo-app', {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('debug', true)
//mongoose promise to use nodeJS promise
mongoose.Promise = Promise


//Using the model "Todo"
module.exports.Todo = require('./todo')
