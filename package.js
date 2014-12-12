Package.describe({
  name: '<maintainer>:<package>',
  version: '0.0.1',
  summary: '<package> made for Meteor by @<maintainer>',
  git: 'https://github.com/<maintainer>/<package>.git'
});

// Cordova.depend({
//   'org.cordova.package': '0.0.0'
// });

// Npm.depend({
//   'npmpackage': '0.0.0'
// });

Package.onUse(function(api) {
  var Both = ['client', 'server'];

  // api.use([''], Both);
  // api.use([''], 'client');
  // api.use([''], 'server');

  // api.imply('');

  // api.export('<package>');

  // Common api, define your general code/scopes here
  api.addFiles(['lib/common.js'], Both);
  // Browser api
  api.addFiles(['lib/web.browser.js'], 'web.browser');
  // Cordova api
  api.addFiles(['lib/web.cordova.js'], 'web.cordova');
  // General api
  api.addFiles(['lib/client.js'], 'client');
  // Server specific code
  api.addFiles(['lib/server.js'], 'server');


});

Package.onTest(function (api) {
  api.use('<maintainer>:<package>', ['client', 'server']);

  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'tracker']);

  api.add_files('tests/tinytest/client.js', 'client');
  api.add_files('tests/tinytest/server.js', 'server');
});
