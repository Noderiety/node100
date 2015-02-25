let fs = require('fs')

console.log(Date.now(), 'reading file...')
let data = fs.readFile(__filename, 
  (err, data) => {
    console.log(Date.now(), String(data))
  })
console.log(Date.now(), 'something unrelated')