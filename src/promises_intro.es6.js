let Promise = require('songbird'),
		fs = require('fs')

// console.log('filename: %s', firstFilename)

readAllFilesInDir(__dirname)
	.then((fileBuffers ) => {
		let length = 0
		fileBuffers.forEach((fileBuffer) => {
			length += fileBuffer.length
		})
		return length
	})
	.then(console.log)
	// .catch((e) => {
	// 	console.log(e.stack)
	// 	process.exit()
	// })
	// .done()

function readAllFilesInDir(dir) {
	return fs.promise.readdir(dir)
		.then((files) => {
			files.map(console.log)
			throw new Error('fail')
			return Promise.all(
				files.map((file) => {
					return fs.promise.readFile(__dirname + '/' + file)
				})
			)
		})
}

// function handleError(err) {
// 	console.log(err.message)
// 	return null
// }

// setTimeout(() => {
// 	promise.then((data) => {
// 			return Promise.all([
// 				promise,
// 				newPromise
// 			])
// 		})
// 		.then((values) => {
// 			console.log(values)
// 			throw new Error('fail')
// 			return values[0].length + values[1].length
// 		})
// 		.then(
// 			console.log,
// 			(e) => {
// 				console.log(String(e))
// 				throw e
// 			}
// 		)
// 		.catch( e => {
// 			console.log(String(e))
// 		})
// }, 2000)
// // promise.catch(function(e) {
// // 	console.log('fail:\n\n%s', e.stack)
// // })

// // fs.readFile(filename, function(err, data) {
// // 	console.log(String(data))
// // })