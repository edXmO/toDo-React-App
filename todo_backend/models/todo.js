const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        unique: true,
        required: true
    },
    completed: {
        type: Boolean,
        unique: true,
        default: false
    }
});


//mongoose model object from the schema
const todoModel = mongoose.model('Todo', todoSchema);

//exporting the model
module.exports = todoModel;