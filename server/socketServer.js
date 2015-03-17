/**
 * Created on 14.03.15.
 */

var socketServer = require('socket.io');

socketServer.start = function(webServer) {
	var io = socketServer(webServer);

	io.on('connection', function(socket) {

	});
};

module.exports = socketServer;