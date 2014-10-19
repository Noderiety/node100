let q = require('q')
	, fs = require('fs')
	, co = require("co")
	, request = require('request')
	// , requestUrl = 'http://google.com'
	, readFile = q.denodeify(fs.readFile)

function* makeRequest(requestUrl) {
	return yield request.bind(null, requestUrl);
}


co(function* () {
	return yield makeRequest(String(yield readFile('./url.txt')))
})((err, result) => {
  if (err) return console.log(err.stack)
  console.log(String(result))
})
