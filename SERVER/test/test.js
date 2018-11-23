import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../server';

chai.should();
chai.use(chaiHttp);
// Test error 404
describe('API TEST', () => {
  it('it should get home page', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.have.property('message').eql('welcome');
        done();
      });
  });
});
 // Testing getting all parcel delivery order
 it('it should get all parcel', (done) => {
  chai.request(server)
    .get('/api/v1/parcels')
    .end((err, res) => {
      res.should.have.status(200);
      
      
      done();
    });
});