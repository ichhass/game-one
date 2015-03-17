/**
 * Created on 14.03.15.
 */
var nconf = require('nconf');
var path = require('path');

nconf.argv()
	.env()
	.add('serverConfig', {type: 'file', file: path.join(__dirname, 'serverConfig.json')})
	.add('gameConfig', {type: 'file', file: path.join(__dirname, 'gameConfig.json')});

module.exports = nconf;