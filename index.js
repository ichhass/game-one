/**
 * Created on 14.03.15.
 */

var config = require('./config/index.js');

var webServer = require('./server/webServer');
var socketServer = require('./server/socketServer');

webServer.init();
socketServer.start(webServer.start(config));

