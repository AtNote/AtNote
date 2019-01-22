'use strict';

class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  post(note) {
    let newNote = new this.schema(note);
    return newNote.save();
  }

  get(_id, user) {
    let query = _id ? {_id} : {};
    let username = user ? {user} : {};
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