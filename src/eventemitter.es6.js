// create read stream
// Add handler
// core adds internal event listener
// waiting...
// core event comes in
// ee.emit => handler is called

let EventEmitter = require('events').EventEmitter,
	ee = new EventEmitter()

setTimeout(() => {
  console.log('1: emitting events')
  ee.emit('bar')
  ee.emit('bar', '2nd')
  ee.emit('bar', '3rd', {hello: 'world'})
  console.log('3: done')
	// ee.emit('error', new Error('fail'))
}, 2000)
console.log('listening on "foo" & "error" events')

module.exports = ee