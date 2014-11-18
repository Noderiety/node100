// List all files recursively within a directory with maximum parallelism
let path = require('path')
let fs = require('fs')
let Promise = require('songbird')
let co = require('co')
let _ = require('lodash')

function* statFile(filePath) {
	let stat
	try {
		// Stat current file path
		stat = yield fs.promise.stat(filePath)
	} catch(e) {
		// Ignore bad symlinks
		if (e.code !== 'ENOENT') throw e
		return []
	}

	// If file is a directory...
	// recursively list all files
	if (stat.isDirectory()) {
		return yield listDir(filePath)
	} else {
		return filePath.replace(__dirname, '.')
	}
}

function* listDir(dir) {
	// Get all filenames in current directory
	let files = yield fs.promise.readdir(dir)
		, fileNames
		, fileNamesIts

	// Stat all the filenames
	fileNamesIts = files.map(function(name) {
		var filePath = path.join(dir, name)
		return statFile(filePath)
	})
	fileNames = yield fileNamesIts
	return _.flatten(fileNames)
}

co(function* () {
	(yield listDir(__dirname)).forEach(function(filePath) {
		console.log(filePath)
	})
})()
console.log('done.')


