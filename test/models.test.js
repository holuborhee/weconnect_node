import chai from 'chai';
import Business from '../models/business';
// import { businesses } from '../lib/db.js';


const { expect } = chai;

/* describe('Get businesses', () => {
  let business = new Business({id:1, });

  it('find should return a business', (done) => {
    expect(business).to.be.an('object');
    done();
  });

  it('find(1) should return a business with id of 1', (done) => {
    expect(business.id).to.equal(1);
    done();
  });


  it('find(10) should return null', (done) => {
  	business = Business.find(10);
  	expect(business).to.be.a('null');
  	done();
  });

  it('businesses return should be of length 3', () => {
  	const businesses = Business.all();
  	expect(businesses).to.have.lengthOf(3);
  });
}); */


describe('Business', () => {
  it('constructor should create an instance of business class', (done) => {
    const b = new Business({
      id: 1, name: 'Noble Computers', user: 1, category: 4, latitude: 3.142, longitude: 4.5678, address: '31, Mbaise Road, Owerri',
    });

    expect(b).to.be.an.instanceOf(Business);
    done();
  });

  it('constructor should throw an error if props value are not complete or undefined', (done) => {
    const badfn = () => {
      const b = new Business({
        name: 'Noble Computers', user: 1, category: 4, latitude: 3.142, longitude: 4.5678, address: '31, Mbaise Road, Owerri',
      });

      return b;
    };


    expect(badfn).to.throw();
    done();
  });

  it('create should return an instance of business', (done) => {
    const b = Business.create({
      name: 'Noble Computers', user: 1, category: 4, latitude: 3.142, longitude: 4.5678, address: '31, Mbaise Road, Owerri',
    });

    expect(b).to.be.an.instanceOf(Business);
    done();
  });

  it('create should populate businesses array', (done) => {
    expect(Business.all()).to.have.lengthOf(5);
    done();
  });

  it('find(i) should return a business if value is found for i', (done) => {
    expect(Business.find(2)).to.be.an.instanceOf(Business);
    done();
  });

  it('find(i) should return null if no value is found for i', (done) => {
    expect(Business.find(6)).to.be.null; /* eslint no-unused-expressions: "off" */
    done();
  });

  it('should return only businesses under a category', (done) => {
    expect(Business.under(4)).to.have.lengthOf(4);
    expect(Business.under(2)).to.have.lengthOf(1);
    expect(Business.under(1)).to.have.lengthOf(0);
    done();
  });
});


describe('Review', () => {
  it('should return all reviews for a business', (done) => {
    const business = Business.find(1);
    expect(business.review.all()).to.have.lengthOf(3);
    done();
  });

  it('should add to the review for a business', (done) => {
    const business = Business.find(1);
    const review = { comment: 'My comment', rating: 4.5, reviewer: 'Hohn adav' };
    business.review.add(review);
    expect(business.review.all()).to.have.lengthOf(4);
    done();
  });
});
