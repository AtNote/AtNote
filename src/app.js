'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const errorHandler =  require('./middleware/error.js');
const notFound = require('./middleware/404.js');

const router = require('./api/router.js');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use(router);

app.use(notFound);
app.use(errorHandler);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if(!isRunning) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`Server is up on ${port}`);
      });
    } else {
      console.log('Server is already running');
    }
  },
};