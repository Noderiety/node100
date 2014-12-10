let EventEmitter = require('events').EventEmitter,
		ee = new EventEmitter();

ee.on('bar', (...args) => {
  console.log(args);
});
ee.on('bar', (...args) => {
  console.log(args);
});

// ee.on('error', err => {
// 	console.log(err.stack);
// });

setTimeout(() => {
  ee.emit('bar');
  ee.emit('bar', {some: 'data'}, 'world');
  ee.emit('bar', {some: 'data'}, 'y\'all');
	// ee.emit('error', new Error('fail'));
}, 2000)

console.log('listening on "foo" & "error" events')