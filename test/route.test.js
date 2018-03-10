import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../lib/index';

const { expect } = chai;
chai.use(chaiHttp);

const BASE_URL = '/api/v1';

describe('Test the index URL of API for response', () => {
  it('should return a 200 code', (done) => {
    chai.request(app)
		  .get('/api/v1')
		  .end((err, res) => {
		  	expect(res).to.have.status(200);
		  	done();
		  });
  });
});


describe('Test fetching of all businesses', () => {
  it('should fetch all when no parameter is present', (done) => {
    chai.request(app)
		  .get(`${BASE_URL}/businesses`)
		  .end((err, res) => {
		  	expect(res).to.have.status(200);
		  	expect(res.body.message).to.equal('You requested for all businesses');
		  	done();
		  });
  });

  it('should filter fetch with location', (done) => {
    chai.request(app)
		  .get(`${BASE_URL}/businesses?location=owerri`)
		  .end((err, res) => {
		  	expect(res).to.have.status(200);
		  	expect(res.body.message).to.equal('You requested for all businesses in owerri');
		  	done();
		  });
  });

  it('should filter fetch with category', (done) => {
    chai.request(app)
		  .get(`${BASE_URL}/businesses?category=fashion`)
		  .end((err, res) => {
		  	expect(res).to.have.status(200);
		  	expect(res.body.message).to.equal('You requested for all businesses under fashion');
		  	done();
		  });
  });

  it('should search for business with name', (done) => {
    chai.request(app)
		  .get(`${BASE_URL}/businesses?q=oluaka`)
		  .end((err, res) => {
		  	expect(res).to.have.status(200);
		  	expect(res.body.message).to.equal('You requested for all businesses with name as oluaka');
		  	done();
		  });
  });

  it('should ignore unexpected parameter and return businesses', (done) => {
    chai.request(app)
		  .get(`${BASE_URL}/businesses?qi=oluaka&locate=owerri&category=education`)
		  .end((err, res) => {
		  	expect(res).to.have.status(200);
		  	expect(res.body.message).to.equal('You requested for all businesses under education');
		  	done();
		  });
  });

  it('should consider all expected parameters', (done) => {
    chai.request(app)
		  .get(`${BASE_URL}/businesses?q=oluaka&another=nothing&location=owerri&category=education`)
		  .end((err, res) => {
		  	expect(res).to.have.status(200);
		  	expect(res.body.message).to.equal('You requested for all businesses with name as oluaka in owerri under education');
		  	done();
		  });
  });
});
/* import '../lib/index.js';


// Test the Node Server if it's working
describe('Test Node Server', () => {
  it('should return 200', (done) => {
    http.get('http://127.0.0.1:8080/api/v1', (res) => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
}); */
