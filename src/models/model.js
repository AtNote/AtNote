'use strict';

class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  post(note) {
    let newNote = new this.schema(note);
    return newNote.save();
  }

  get(key,value) {
    let query = {};
    if(key && value) {
      query[key] = value;
    }
    return this.schema.find(query);
  }

  // put(_id, note) {
  //   return this.schema.findByIdAndUpdate(_id, note, {new:true});
  // }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = DataModel;