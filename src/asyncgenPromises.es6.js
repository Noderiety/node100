let fs = require('fs')
	, co = require("co")
	, request = require('request-promise')

require('songbird')

function makeRequest(requestUrl) {
	return request(requestUrl)
}

function* readFile(pathname) {
	return yield fs.promise.readFile(pathname)
}

co(function* () {
	let [file] = yield readFile('./url.txt')
	console.log(String(file))
	return yield makeRequest(String(file))
})((err, result) => {
	console.log(result)
})
