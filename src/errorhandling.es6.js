let fs = require('fs')
	, trycatch = require('trycatch')

trycatch.configure({'long-stack-traces': true})

trycatch(function() {
	fs.readFile(__filename, function(err, data) {
		console.log('success:', data)
	})
}, function(err) {
	console.log('Caught: ', err.stack)
})