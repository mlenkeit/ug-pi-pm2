'use strict';

const path = require('path');

module.exports = require('./main.config.js')
  .filter(config => config.exposePort === true)
  .map(config => {
    return {
      port: config.port,
      cbPath: path.resolve(__dirname, './lib/on-lto-update-travel-destination.js')
    };
  });