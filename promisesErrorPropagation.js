var fs = require('fs')
var q = require('q')

function getTotalFileLength() {
	return q.all([
		q.nfcall(fs.readFile, __filename),
		q.nfcall(fs.readFile, __filename)
	]).then(function(datas) {
		return 3
		return asyncCalculateLengthPromise(datas)
		return q(3)
		return q.reject(new Error('fail'))
		return q.all([promiseA, promiseB, promiseC])
	})
}
function main() {
	return getTotalFileLength()
		.then(function(length) {
			if (length > 10) throw new Error('Those files are way too long')
			console.log('success')
		})
		.fail(function(err) {
			console.log(err)
		})
}

main().done()
