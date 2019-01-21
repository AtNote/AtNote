'use strict';

class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  newNote(note) {
    let newNote = new this.schema(note);
    return newNote(save);
  }


}

module.exports = DataModel;