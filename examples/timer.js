var EventEmitter = require('events').EventEmitter;
var util = require('util')

function Timer(period, options) {
	var that = this;
	EventEmitter.call(this)
}

Timer.prototype = util.inherits(Timer, EventEmitter)
Timer.prototype.period = 10000;

// typically, in another file
var timer = new Timer(null, {isInterval: true});
