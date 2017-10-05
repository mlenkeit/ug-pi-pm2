'use strict';

const config = require('./../main.config.js');
const rp = require('request-promise-native');

module.exports = function(port, url) {
  port = parseInt(port, 10);
  const component = config
    .filter(config => config.exposePort === true)
    .find(config => config.port === port);
    
  return rp.put({
    uri: `https://ml-ug.herokuapp.com/travel/${component.exposeAs}`,
    json: {
      name: component.exposeAs,
      destination: url,
      type: 'redirect'
    }
  });
};