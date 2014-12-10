var trycatch = require('trycatch')

trycatch.configure({'long-stack-traces': true})


trycatch(function() {
	setTimeout(function() {
		setTimeout(arguments.callee, 1000)
		throw new Error('Fail.')
	}, 1000)
}, function(err) {
	console.log('Caught:', err.stack)
})