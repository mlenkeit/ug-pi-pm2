'use strict';

module.exports = require('./main.config.js')
  .filter(config => config.exposePort === true)
  .map(config => {
    return {
      port: config.port
    };
  });