'use strict';

const supergoose = require('../supergoose.js');
const {app} = require('../../src/app.js');
const mockRequest = supergoose.server(app);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);


describe('API Server', () => {
  it('should respond with a 404 on an invalid route', (done) => {
    return mockRequest
      .get('/totallyARoute')
      .then(results => {
        expect(results.status).toBe(404);
        done();
      });
  });

  //do server error test

  
  describe('API Post Routes', () => {
    it('should be able to post to /api/notes/', (done) => {
      
      let obj = {note:'This is a note about how great cheese is!', user:'Brent', tags:['Cheese']};
      return mockRequest
        .post('/api/notes/')
        .send(obj)
        .then(results => {
          expect(results.status).toBe(200);
          expect(results.body._id).toBeTruthy();
          done();
        });
    });
  });
  
  describe('API Get Routes', () => {
    
    it('should respond properly on request to /api/note/{key}/{value}', (done) => {
      return mockRequest
        .get('/api/notes/tags/cheese')
        .then(results => {
          expect(results.status).toBe(200);
          done();
        });
    });

    it('following a create note, should find a note by _id', (done) => {
      let obj = {note:'This is a note about how great cheese is!', user:'Brent', tags:['Cheese']};
      return mockRequest
        .post('/api/notes/')
        .send(obj)
        .then(results => {
          return mockRequest
            .get(`/api/notes/_id/${results.body._id}`)
            .then(data => {
              expect(data.status).toBe(200);
              expect(data.body.results.note).toEqual(obj.note);
              done();
            });
        });
    });
    it('following a create note, should find a note by tag', (done) => {
      let obj = {note:'This is a note about how great cheese is!', user:'Brent', tags:['chedda', 'american']};
      return mockRequest
        .post('/api/notes/')
        .send(obj)
        .then(results => {
          return mockRequest
            .get(`/api/notes/tags/${results.body.tags[1]}`)
            .then(data => {
              expect(data.status).toBe(200);
              expect(data.body.results.tags[1]).toEqual('american');
              expect(data.body.results.tags[0]).toEqual('chedda');
              done();
            });
        });
    });
    it('following a create note, should find all notes for a user', (done) => {
      let obj = {note:'This is a note about how great cheese is!', user:'Brent'};
      return mockRequest
        .post('/api/notes/')
        .send(obj)
        .then(results => {
          return mockRequest
            .get(`/api/notes/user/${obj.user}`)
            .then(data => {
              expect(data.status).toBe(200);
              expect(data.body.results.note).toEqual(obj.note);
              done();
            });
        });
    });

  });

  describe('API Delete Routes', () => {
    it('should be able to delete a note to /api/notes/{key}/{value}/', (done)  => {

      let obj = {note:'This is a note about how great cheese is!', user:'Brent', tags:['wiz']};
  
      return mockRequest
        .post('/api/notes/')
        .send(obj)
        .then(results => {
          return mockRequest
            .delete(`/api/notes/tags/${results.body.tags[0]}`)
            .then(result => {
              expect(result.status).toBe(200);
              expect(result.body.n).toEqual(1);
              done();
            });
        });
  
    });
  });
});
