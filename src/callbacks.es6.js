let fs = require('fs')
let currentFile

function readCurrentFile(callback) {
  if(currentFile) {
    return callback(null, currentFile)
  }
  fs.readFile('asdf', (err, data)=>{
    if (err) {
      let newError = new Error('something really bad happened')
      newError.originalError = err
      return callback(newError)
    }

    if (!currentFile) currentFile = data
    callback(null, data)
  })
}

readCurrentFile((err, data) => {
  console.log(1)
  console.log(err, data)
  readCurrentFile((err, data) => {
    console.log(3)
    console.log(err, data)
  })
  console.log(2)
})
