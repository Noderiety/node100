let EventEmitter = require('events').EventEmitter,
		ee = new EventEmitter();

ee.on('foo', data => {
	console.log(data);
});

ee.on('error', err => {
	console.log(err.stack);
});

ee.emit('foo', {some: 'data'});
ee.emit('error', new Error('fail'));