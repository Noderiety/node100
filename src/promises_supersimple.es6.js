let fs = require('fs'),
		q = require('q'),
		readFile = q.denodeify(fs.readFile),
		filenames = [
			'index.js',
			'q.js',
			'gulpfile.js'
		]


function readFiles(filenames) {
	let promises = q.when(filenames).then(filenames => {
			filenames.map(filename => {
				return readFile(__dirname+'/../'+filename)
			})
		})
	return q.all(promises)
}

readFiles(filenames)
	.then(files => {
		let sum = 0
		files.forEach(file => sum += file.length)
		return sum
	})
	.then(length => console.log(length))
	.catch(err => console.log(err.stack))