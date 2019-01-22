'use strict';

const express = require('express');
const router = express.Router();
const notes = require('../models/note-model.js');

//Routes
router.get('/api/notes/:key/:value', getAllNotes);
router.post('/api/notes', postNotes);

// Functions
function getAllNotes(req,res,next) {
  notes.get(req.params.key, req.params.value)
    .then(data => {
      const output = {
        results: data,
      };
      res.status(200).json(output);
    })
    .catch(next);
}

function postNotes(req,res,next) {
  notes.post(req.body)
    .then(results => res.status(200).json(results))
    .catch(next);
}

module.exports = router;