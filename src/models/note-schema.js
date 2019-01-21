'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const note = mongoose.Schema ({
  note: {type:String, required:true}, 
  tags: {type:String, required:false},
})

module.exports = mongoose.model('note', note);