'use strict';

module.exports = [{
  githubSlug: 'mlenkeit/pi-dab',
  githubWebhook: 16109011,
  dir: '/home/pi/ug/pi-dab',
  postCheckoutScript: 'npm run dab:post-checkout && pm2 restart pi-dab',
}, {
  githubSlug: 'mlenkeit/pi-localtunnel-opener',
  githubWebhook: 16227308,
  dir: '/home/pi/ug/pi-localtunnel-opener',
  postCheckoutScript: 'npm run dab:post-checkout && pm2 restart pi-lto'
}, {
  githubSlug: 'mlenkeit/ug-pi-pm2',
  githubWebhook: 16194414,
  dir: '/home/pi/ug/ug-pi-pm2',
  postCheckoutScript: [
    'npm install --production',
    'pm2 restart pm2.config.js',
    'pm2 save'
  ].join(' && '),
  port: 50505,
  exposePort: true
}, {
  githubSlug: 'mlenkeit/ug-pi-wetty',
  githubWebhook: 16407172,
  dir: '/home/pi/ug/ug-pi-wetty',
  postCheckoutScript: 'npm install --production && pm2 restart wetty',
  port: 5001,
  exposePort: true
}];