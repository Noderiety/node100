// List all files recursively within a directory with maximum parallelism
"use strict";
let path = require('path')
let fs = require('fs')
let thunker = require('thunker')
let co = require('co')
let _ = require('lodash')

fs = thunker(fs)

function* statFile(filePath) {
	try {
		var stat = yield fs.stat(filePath)
	} catch(e) {
		// Ignore bad symlinks
		if (e.code !== 'ENOENT') throw e
		return []
	}

	if (stat.isDirectory()) {
		return yield listDir(filePath)
	} else {
		return filePath.replace(__dirname, '.')
	}
}

function* listDir(dir) {
	var files = yield fs.readdir(dir)
		, fileList

	fileList = yield files.map(function(fileName) {
		var filePath = path.join(dir, fileName)
		return statFile(filePath)
	})
	return _.flatten(fileList)
}

co(function* () {
	(yield listDir(__dirname))
		.forEach(function(filePath) {
			console.log(filePath)
		})

	// Or, call a generator, but don't wait
	co(listDir)(__dirname)
})()

