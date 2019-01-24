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
        expect(record._id).toBeTruthy();
        done();
      });
  });

  it('can get() a note', (done) => {
    let obj = {note:'This is a note about how great cheese is!', user:'Brent', tags:['Cheese']};
    return note.post(obj)
      .then(record => {
        return note.get('_id', record._id)
          .then(data => {
            console.log(data);
            expect(data.body.results.tags).toEqual(obj.tags);
            done();
          });
      });
  });

  it('can delete() a note', (done) => {
    let obj = {note:'This is a note about how great cheese is!', user:'Brent', tags:['Cheese']};
    return note.post(obj)
      .then(record => {
        return note.delete(record._id)
          .then(player => {
            expect(player.n).toBeTruthy();
            done();
          });
      });
  });
  
});