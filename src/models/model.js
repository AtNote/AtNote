'use strict';

/**
 *
 * This is a generic model that supports the use of a mongo schema
 * and provides methods for REST verbs POST, GET, and DELETE.
 * @class DataModel
 */
class DataModel {

  /**
   * Creates an instance of DataModel.
   * @param {*} schema - Mongo Schema
   * @memberof DataModel
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   *
   * Method that takes in a note object
   * and passes it to a the instances Schema.
   * Returning modeled data according to the
   * schema and saving it to the database.
   * @param {Object} note JSON Object
   * @returns Modeled data according to schema and saves to Mongo database.
   * @memberof DataModel
   */
  post(note) {
    let newNote = new this.schema(note);
    return newNote.save();
  }

  /**
   *
   * Method that takes in two arugments, an key
   * and a value. Creates an object literal using
   * the passed arguments and exicutes a find()
   * operation in the Mongo database using this object
   * as the query.
   * @param {string} key String corresponding to any key in a stored document.
   * @param {string} value String corresponding to any value in a stored document.
   * @returns {Object} JSON Object containing documents that match the find query.
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
   * Method that takes in two arugments, an key
   * and a value. Creates an object literal using
   * the passed arguments and exicutes a remove()
   * operation in the Mongo database using this object
   * as the query.
   * @param {string} key String corresponding to any key in a stored document.
   * @param {string} value String corresponding to any value in a stored document.
   * @returns {Object} JSON Object referencing the number of database entries found and deleted.
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