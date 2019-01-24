'use strict';

const note = require('../../src/models/note-model.js');
const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Note Model', () => {
  it('can post() a new note', (done) => {
    let obj = {note:'This is a note about how great cheese is!', user:'Brent', tags:['Cheese']};
    return note.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
          done();
        });
      });
  });

  it('can get() a note', (done) => {
    let obj = {note:'This is a note about how great cheese is!', user:'Brent', tags:['Cheese']};
    return note.post(obj)
      .then(record => {
        return note.get(record._id)
          .then(player => {
            Object.keys(obj).forEach(key =>{
              expect(player[0][key]).toEqual(obj[key]);
              done();
            });
          });
      });
  });

  it('can delete() a note', (done) => {
    let obj = {note:'This is a note about how great cheese is!', user:'Brent', tags:['Cheese']};
    return note.post(obj)
      .then(record => {
        return note.delete(record._id)
          .then( note => {
            Object.keys(obj).forEach(key =>{
              expect(note[0][key]).toEqual(obj[key]);
              done();
            });
          });
      });
  });
  
});