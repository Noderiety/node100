let trycatch = require('trycatch').configure({'long-stack-traces':true})

trycatch(() => {
	function f() {
		throw new Error('foo');
	}
	
	setTimeout(f, Math.random()*1000);
	setTimeout(f, Math.random()*1000);
}, err => console.log("Asynchronous error handler!\n", err.stack))
