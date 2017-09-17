'use strict';

const path = require('path');

const secretEnv = require('./secret/env.json');

module.exports = {
  apps: [{
    name: 'pi-dab',
    script: './../pi-dab/index.js',
    env: {
      GITHUB_TOKEN: secretEnv.GITHUB_TOKEN,
      GITHUB_USER: 'mlenkeit',
      PORT: '5000',
      PROJECTS: path.resolve(__dirname, './projects.js')
    }
  }]
};