var fs = require('fs')
var q = require('q')
var userIds = [5,15,25]
var readFile = q.denodeify(fs.readFile)

function getUser(id) {
	return readFile(__filename)
}
q.all(userIds.map(getUser))
	.then(function(datas) {
		console.log(datas.map(String))
	})

])
// console.log(ret)