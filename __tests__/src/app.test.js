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
