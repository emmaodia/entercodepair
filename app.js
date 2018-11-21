const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//routes
const main = require('./routes/main');
const post = require('./routes/posts');

// Log requests to the console
app.use(morgan('dev'));;

//Parse incoming data requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api/main', main);
app.use('/api/posts', post);

module.exports = app;
