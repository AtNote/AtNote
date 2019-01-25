'use strict';

// Functions
/**
 * 
 * Middleware Function to catch any unhandled routes.
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param next Triggers next middleware.
 */
module.exports = (req,res,next) => {
  let error = {error: 'Resource not found'};
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};