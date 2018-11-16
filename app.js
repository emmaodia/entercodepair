const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Log requests to the console
app.use(logger('dev'));

//Parse incoming data requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//default routing
app.get('*', (req, res) => res.status(200).send({
  message: "Working... still."
}));

module.exports = app;
