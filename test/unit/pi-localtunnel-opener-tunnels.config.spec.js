'use strict';

const expect = require('chai').expect;

describe('pi-localtunnel-opener-tunnels.config', function() {
  
  beforeEach(function() {
    this.config = require('./../../pi-localtunnel-opener-tunnels.config.js');
  });
  
  it('is syntactically correct', function() {
    expect(this.config)
      .to.be.an('array');
      
    this.config.forEach(config => {
      expect(config)
        .to.be.an('object');
      expect(config)
        .to.have.property('port')
        .that.is.a('number');
      expect(config)
        .to.have.property('cbPath')
        .that.is.a('string');
    });
  });
  
  it('is semantically correct', function() {
    expect(this.config)
      .to.have.lengthOf(1);
  });
});