let fs = require('fs')
let cache = {__filename: 'asdf'}
let EE = require('events').EventEmitter

function readFile(path, callback) {
  let ee = new EE

  if (cache[path]) {
    process.nextTick(() => {
      callback(null, cache[path])
      ee.emit('beenRead')
    })
  } else {
    fs.readFile(path, (err, data) => {
      ee.emit('beenRead')
      cache[path] = data
      callback(err, data)
    })
  }
  return ee
}

console.log('i expect this to be 1st')
let ee = readFile(__filename, (err, data) => {
  console.log(data)
  console.log('i expect this to be last')
})
ee.on('beenRead', (data) => {
  console.log('THIS SHOULD ALWAYS EXECUTE')
})
ee.on('error', (err) => {
  console.log('ooops. error: ', err.stack)
})
console.log('i expect this to be 2nd')

