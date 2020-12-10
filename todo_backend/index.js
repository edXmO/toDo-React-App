const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));







app.listen(() => {
    console.log(`Server listening on http://localhost:${port}`);
})