'use strict';

const expect = require('chai').expect;
const nock = require('nock');

const onLto = require('./../../lib/on-lto-update-travel-destination');

describe('on-lto-update-travel-destination', function() {
  
  afterEach('clean-up nock', function() {
    nock.cleanAll();
  });
  
  it('takes two parameters', function() {
    expect(onLto).to.have.lengthOf(2);
  });
  
  context('for ports exposed with type `redirect`', function() {
  
    it('updates the travel destination on ml-ug', function() {
      const url = 'https://abcdefg.localtunnel.me';
      const travelDestination = {
        name: 'wetty',
        destination: url,
        type: 'redirect'
      };
      const scope = nock('https://ml-ug.herokuapp.com')
        .put('/travel/wetty', travelDestination)
        .reply(204);
        
      return onLto(5001, url)
        .then(() => {
          expect(scope.isDone()).to.be.true;
        });
    });
    
  });
});