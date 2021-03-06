'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');


app.get('/data', (req, res) => {
  res.status(200).send('Hello World ! This server is visible.');
});


app.get('/bad', (req, res) => {
  throw new Error('Something went wrong!');
});



app.use('*', notFoundHandler);// this has to be after all the routes

app.use(errorHandler); // this has to be the last line 


function start(port) {
  app.listen(port, () => console.log(`This server is up and running on port ${port}`));
}

module.exports = {
  app: app,
  start: start,
};



