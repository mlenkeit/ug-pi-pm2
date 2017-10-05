'use strict';

const expect = require('chai').expect;

describe('pi-dab-projects.config', function() {
  
  beforeEach(function() {
    this.config = require('./../../pi-dab-projects.config.js');
  });
  
  it('is syntactically correct', function() {
    expect(this.config)
      .to.be.an('array');
      
    this.config.forEach(config => {
      expect(config)
        .to.be.an('object');
      expect(config)
        .to.have.property('name')
        .that.is.a('string');
      expect(config)
        .to.have.property('dir')
        .that.is.a('string');
      expect(config)
        .to.have.property('githubWebhook')
        .that.is.a('number');
      expect(config)
        .to.have.property('postCheckoutScript')
        .that.is.a('string');
    });
  });
  
  it('is semantically correct', function() {
    expect(this.config)
      .to.have.lengthOf(4);
  });
});