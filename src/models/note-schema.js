'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const note = mongoose.Schema ({
  note: {type:String, required:true},
  user: {type:String, required:true},
  tags: {type:Array},
});

module.exports = mongoose.model('note', note);

Date.now()