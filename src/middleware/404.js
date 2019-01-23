'use strict';

/**
 *
 * 
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req,res,next) => {
  let error = {error: 'Resource not found'};
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};