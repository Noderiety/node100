let fs = require('fs')
require('songbird')

// console.log('filename: %s', firstFilename)

async function main() {
	let fileBuffers = await readAllFilesInDir(__dirname)
	console.log('hello')

	let length = 0
	fileBuffers.forEach((fileBuffer) => {
		length += fileBuffer.length
	})

	console.log(length)
}

async function readAllFilesInDir(dir) {
	let files = await fs.promise.readdir(dir)

	let filePromises = files.map((file) => {
		return fs.promise.readFile(__dirname + '/' + file)
	})
	return await Promise.all(filePromises)
}

main().done()