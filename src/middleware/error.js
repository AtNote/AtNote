'use strict';

/**
 * 
 * Middleware function that processes all Server Errors.
 * @param {*} err Error object from thrown system error
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param next Triggers next middleware.
 */
module.exports = (err,req,res,next) => {
  let error = {error: err};
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};
