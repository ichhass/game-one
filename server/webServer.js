/**
 * Created on 14.03.15.
 */

var webServer = require('koa')();

webServer.init = function () {
	this.use(require('koa-logger')());

	this.keys = ['secret'];

	this.use(require('koa-generic-session')());

	this.use(function* (next) {
		if (this.session.name == undefined) {
			this.session.name = Math.random();
		}
		yield* next;
	});

	this.use(require('koa-static')('client'));
};

webServer.start = function (config) {
	return this.listen(config.get('port'), function(){
		console.log('Web Server has started');
	});
}

module.exports = webServer;

