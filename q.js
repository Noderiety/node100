let fs = require('fs'),
		q = require('q'),
		foo = q.denodeify(foo),
		bar = q.denodeify(bar),
		readDir = q.denodeify(fs.readdir)

q.all([
	foo(),
	foo(),
	foo()
]).then(function(dataArray) {
	assert(data === undefined)
})
.done()

var value
function foo() {
	var promiseOrValue = value || bar()

	return q.when(promiseOrValue)
		.then(function(data) {
			return q.reject(new Error('asdf'))
			return readDir(__dirname)
		})
		.then(function(files) {
			assert(Array.isArray(files))
			return value = data
		})
}

function bar() {
	var d = q.defer()
  fs.readFile(__filename, (err, data) => {
  	if (err) return d.reject(err)
  	d.resolve(data)
  })

	return d.promise
}
