var fs = require('fs')

var stepup = require('stepup')
var q = require(q)

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
		q.ncall(fs.readFile, __filename),
		q.ncall(fs.readFile, __filename)
	]).then(function(err, datas) {
		return datas[0].length + datas[1].length
	})
}

callbackExample(function(err, length) {console.log('total length is: ', length)})
promiseExample.then(function(err, length) {console.log('total length is: ', length)})
