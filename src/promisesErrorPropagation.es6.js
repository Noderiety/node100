let fs = require('fs'),
		q = require('q'),
		_ = require('lodash'),
		readFile = q.denodeify(fs.readFile)

function getTotalFileLength() {
	return q.all([
		readFile(__filename),
		readFile(__filename)
	]).then(datas => {
		return _.reduce(datas, (sum, num) => sum + num.length, 0)
		// return 3
		// return asyncCalculateLengthPromise(datas)
		// return q(3)
		// return q.reject(new Error('fail'))
		// return q.all([promiseA, promiseB, promiseC])
	})
}

function main() {
	return getTotalFileLength()
		.then(length => {
			if (length > 10) throw new Error('Those files are way too long')
			console.log('success')
		})
		.fail(err => {
			console.log(err.stack)
		})
}

main().done()
