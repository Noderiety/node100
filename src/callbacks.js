var fs = require('fs')


function readCurrentFile(callback) {
  fs.readFile('asdf', function (err, data) {
    if(err) {
      throw err
    }
    console.log(err, data)
  })
}

try {
  readCurrentFile()
} catch(e) {
  console.log('caught')
}