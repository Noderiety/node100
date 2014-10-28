let EventEmitter = require('events').EventEmitter,
		ee = new EventEmitter();

ee.on('foo', (...args) => {
	console.log(args);
});

// ee.on('error', err => {
// 	console.log(err.stack);
// });

setTimeout(() => {
	ee.emit('foo', {some: 'data'}, 'hello');
	ee.emit('error', new Error('fail'));
}, 2000)

console.log('listening on "foo" & "error" events')