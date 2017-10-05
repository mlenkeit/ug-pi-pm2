'use strict';

const config = require('./../main.config.js');
const rp = require('request-promise-native');
const winston = require('winston');

module.exports = function(port, url) {
  port = parseInt(port, 10);
  const component = config
    .filter(config => config.exposePort === true)
    .find(config => config.port === port);
    
  if (!component) {
    winston.log('warn', `No component found to travel to port ${port}`);
    return Promise.resolve();
  }
  winston.log('info', `Updating travel destination ${component.exposeAs}`);
    
  return rp.put({
    uri: `https://ml-ug.herokuapp.com/travel/${component.exposeAs}`,
    json: {
      name: component.exposeAs,
      destination: url,
      type: 'redirect'
    }
  });
};