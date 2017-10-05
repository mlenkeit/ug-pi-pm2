'use strict';

module.exports = require('./main.config.js')
  .map(config => {
    return {
      name: config.githubSlug,
      dir: config.dir,
      githubWebhook: config.githubWebhook,
      postCheckoutScript: config.postCheckoutScript
    };
  });