const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Endpoints

// Structuring the endpoints
// GET, POST, PUT, DELETE
// /tasks => getting the list of all to do's
// /tasks => adding a new task
// /tasks/:id => updating a task with the corresponding id
// /tasks/:id => removing a task with the corresponding id

// payload is the actual data pack is sent with the get method in HTTP. 
//It is the crucial information that you submit to the server when you are making API request
function success(res, payload) {
    return res.status(200).json(payload);
}


// Async is a request hanlders, using it since we are going to make asynchronous requests and response from/to the db/api
app.get('/tasks', async (req, res, next) => {
    try {
        const tasks = await db.Todo.find({})
        return success(res, tasks)
    } catch (err) {
        next({ status: 400, message: "Failed to get tasks" })
    }
})


app.post('/tasks', async (req, res, next) => {
    try {
        const task = await db.Todo.create(req.body)
        return success(res, task)
    } catch (err) {
        next({ status: 400, message: "Failed to create task" })
    }
})

app.put('/tasks/:id', async (req, res, next) => {
    try {
        const task = await db.Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return success(res, task)
    } catch (err) {
        next({ status: 400, message: "Failed to update task" })
    }
})

app.delete('/tasks(:id', async (req, res, next) => {
    try {
        await db.Todo.findByIdAndRemove(req.params.id)
        return success(res, "Task removed")
    } catch (err) {
        next({ status: 400, message: "Failed to delete task" })
    }
})

// Error request handler

app.use((err, req, res, next) => {
    return res.status(err.status || 400).json({
        status: err.status || 400,
        message: err.message || "Error processing request"
    })
})


app.listen(() => {
    console.log(`Server listening on http://localhost:${port}`);
})