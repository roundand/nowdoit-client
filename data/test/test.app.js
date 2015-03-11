var request = require('superagent');
var expect = require('expect.js');

describe('root endpoint', function() {
  it('should receive a response', function(done){
    request.get('localhost:8000').end(function(res){
      expect(res).to.exist;
      expect(res.status).to.equal(200);
      expect(res.body.content).to.equal('Hello World');
      done();
    })
  });
});
