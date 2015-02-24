let fs = require('fs')
let P = require('bluebird')

require('songbird')

let p = fs.readFile.promise(__filename)
// p is pending
p.then(
  data => {
    // p is resolved, sucess
    let str = 'promise value'
    let p2 = P.resolve(str)
    let p3 = P.resolve(data.length)
    
    p2.then(v => console.log(v === str))

    let p4 = P.all([p2, p3])
    return p4
  }
).catch(
    // p is resolved, failure
  err => console.log(err.stack)
).then(v => {
  console.log('here: ', v)
  return 'ended'
}).then(v2 => {
  console.log('v2: ', v2)
})