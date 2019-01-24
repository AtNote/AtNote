'use strict';

/**
 * @ note API Server Module
 * @module src/app
 */

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swaggerDocs/swagger.json');

const errorHandler =  require('./middleware/error.js');
const notFound = require('./middleware/404.js');

const router = require('./api/router.js');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Static Routes
app.use('/docs', express.static('docs'));
app.use('/clientdocs', express.static('clientdocs'));

// Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//routes
app.use(router);
app.use(notFound);

// Error handling
app.use(errorHandler);

/**
 * Start Server on specified port
 * @param {integer} port (defaults to process.env.PORT)
 */
let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = {app, start};