'use strict';

module.exports = [{
  'name': 'mlenkeit/pi-dab',
  'dir': '/home/pi/ug/pi-dab',
  'githubWebhook': 16109011,
  'postCheckoutScript': 'npm run dab:post-checkout && pm2 restart pi-dab'
}, {
  'name': 'mlenkeit/pi-localtunnel-opener',
  'dir': '/home/pi/ug/pi-localtunnel-opener',
  'githubWebhook': 16227308,
  'postCheckoutScript': 'npm run dab:post-checkout && pm2 restart pi-lto'
}, {
  'name': 'mlenkeit/ug-pi-pm2',
  'dir': '/home/pi/ug/ug-pi-pm2',
  'githubWebhook': 16194414,
  'postCheckoutScript': [
    'npm install --production',
    'pm2 restart pm2.config.js',
    'pm2 save'
  ].join(' && ')
}, {
  name: 'mlenkeit/ug-pi-wetty',
  dir: '/home/pi/ug/ug-pi-wetty',
  githubWebhook: 16407172,
  postCheckoutScript: 'npm install --production && pm2 restart wetty'
}];