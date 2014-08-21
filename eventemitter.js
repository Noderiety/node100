var EventEmitter = require('events').EventEmitter,
		ee = new EventEmitter();

ee.on('foo', function(data) {
	console.log(data);
});

ee.on('error', function(err) {
	console.log(err.stack);
});

ee.emit('foo', {some: 'data'});
ee.emit('error', new Error('fail'));