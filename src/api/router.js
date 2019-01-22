'use strict';

const express = require('express');
const router = express.Router();
const Notes = require('../models/note-model.js');
const notes = new Notes();

//Routes
router.post('/api/notes', postNotes);
router.get('/api/notes', getAllNotes);

// Functions
function getAllNotes(req,res,next) {
  notes.get()
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

module.exports = Router;