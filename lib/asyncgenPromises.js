"use strict"
// run this with --harmony on node v0.11.3+
var q = require('bluebird');
let fs = require('fs')
q.promisifyAll(fs);
let co = require("co")
let request = require('request')

co(function* () {
  var headers = yield function *() {
		var readFilePromise = fs.readFileAsync(__filename);
		var requestThunk = request.bind(null, 'http://google.com');

		var values = yield [readFilePromise, requestThunk]
		console.log(values[1].headers)
	  return values
  }

  return headers
})(function(err, result) {
  if (err) throw err
  console.log(result)
})
