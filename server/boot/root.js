var path = require('path');
var config = require('config');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.static(path.resolve(__dirname, config.fileToServeOnRoot)));
  server.use(router);
};
