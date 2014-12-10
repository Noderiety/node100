// run this with --harmony on node v0.11.3+
"use strict"
let fs = require('fs')
let co = require("co")
let request = require('request')

co(function* () {
	var readFileThunk = fs.readFile.bind(null, __filename);
	// var b = request.bind(null, 'http://google.com');
	function manualThunk(callback) {
		process.nextTick(function() {
			callback(null, true)
		})
	}

  var res = yield [readFileThunk, manualThunk];

  console.log(res)
  return 'success!'
})(function(err, result) {
  if (err) throw err
  console.log(result)
})
