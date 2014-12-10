var fs = require('fs')
	, stepup = require('stepup')
	, q = require(q)
	, readFile = q.denodeify(fs.readFile)


function callbackExample(callback) {
	stepup([
		function($) {
			fs.readFile(__filename, $.first())
			fs.readFile(__filename, $.first())
		},
		function($, dataOne, dataTwo) {
			return dataOne.length + dataTwo.length
		}
	], callback)
}

function promiseExample() {
	return q.all([
		readFile(__filename),
		readFile(__filename)
	]).then(function(datas) {
		return datas[0].length + datas[1].length
	})
}

callbackExample(function(err, length) {console.log('total length is: ', length)})
promiseExample.then(function(length) {console.log('total length is: ', length)}, function(err) {/*...*/})
