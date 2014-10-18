let fs = require('fs'),
		q = require('q'),
		readFile = q.denodeify(fs.readFile)

function callbackFn(data, callback) {
  process.nextTick(() => callback(null, String(data).toUpperCase(), data.length))
}

function main() {
	return readFile(__filename)
		.then(data => q.nfcall(callbackFn, data))
}

main().spread(function(valueOne, valueTwo) {
	console.log(valueOne, valueTwo)
})
.done()