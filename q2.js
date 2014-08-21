var fs = require('fs')
var q = require('q')

var fsReadFile = q.nbind(fs.readFile, fs)

function myNodeFn(callback) {
  process.nextTick(function() {
  	callback(null, 1, 2)
  })
}

function main() {
	return fsReadFile(__filename)
		.then(function(data) {
		  return q.nfcall(myNodeFn)
		})
}

var promise = main()

promise.spread(function(valueOne, valueTwo) {
	console.log(valueOne, valueTwo)
})
.done()

// console.log(promise)

// promise.then(function(){}, function(err){})
// promise.fail(function(e) {})