const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-app', {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('debug', true)
//mongoose promise to use nodeJS promise
mongoose.Promise = Promise


