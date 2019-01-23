'use strict';

/**
 *
 * 
 * @class DataModel
 */
class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  /**
   *
   *
   * @param {*} note
   * @returns
   * @memberof DataModel
   */
  post(note) {
    let newNote = new this.schema(note);
    return newNote.save();
  }

  /**
   *
   *
   * @param {*} key
   * @param {*} value
   * @returns
   * @memberof DataModel
   */
  get(key,value) {
    let query = {};
    if(key && value) {
      query[key] = value;
    }
    return this.schema.find(query);
  }

  /**
   *
   *
   * @param {*} key
   * @param {*} value
   * @returns
   * @memberof DataModel
   */
  delete(key,value) {
    let query = {};
    if(key && value) {
      query[key] = value;
    }
    return this.schema.remove(query);
  }

}

module.exports = DataModel;