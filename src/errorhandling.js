"use strict"
var fs = require('fs')
	, trycatch = require('trycatch')

trycatch.configure({'long-stack-traces': true})

trycatch(function() {
	fs.readFile('asdfasdf', function(err, data) {
		debugger;
		console.log('success:', data.length)
	})
}, function(err) {
	console.log('Caught: ', err.stack)
})