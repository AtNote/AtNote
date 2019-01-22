'use strict';

const noteSchema = require('./note-schema.js');
const Model = require('./model.js');

class Note extends Model { }

module.exports = new Note(noteSchema);