let q = require('bluebird')
	, fs = require('fs')
	, co = require("co")
	, request = require('request')
	, requestUrl = 'http://google.com'

q.promisifyAll(fs);

co(function* () {
	let readFilePromise = fs.readFileAsync(__filename);
	let requestThunk = request.bind(null, requestUrl);

	return yield [readFilePromise, requestThunk]
})((err, result) => {
  if (err) throw err
  console.log(result)
})
