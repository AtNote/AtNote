'use strict';

const express = require('express');
const router = express.Router();
const notes = require('../models/note-model.js');

//Routes
router.get('/api/notes/:key/:value', getNotes);
router.post('/api/notes', postNotes);
router.delete('/api/notes/:key/:value', deleteNotes);

// Functions
/**
 * 
 * Function for dynamically handling get (read) routes to database.
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param next Triggers next middleware.
 */
function getNotes(req,res,next) {
  notes.get(req.params.key, req.params.value)
    .then(data => {
      const output = {
        results: data,
      };
      res.status(200).json(output);
    })
    .catch(next);
}

// Functions
/**
 * 
 * Function for handling post (create) routes to database.
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param next Triggers next middleware.
 */
function postNotes(req,res,next) {
  notes.post(req.body)
    .then(results => res.status(200).json(results))
    .catch(next);
}

// Functions
/**
 * 
 * Function for dynamically handling delete (destroy) routes to database.
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param next Triggers next middleware.
 */
function deleteNotes(req,res,next) {
  notes.delete(req.params.key, req.params.value)
    .then(results => res.status(200).json(results))
    .catch(next);
}

module.exports = router;