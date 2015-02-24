let fs = require('fs')
let P = require('bluebird')

require('songbird')

function readFile(path) {
  let d = P.defer()
  // return fs.readFile.promise(path)
  // return P.resolve(path)
  //   .then(fs.readFile.promise)
  fs.readFile((err, data) => {
    if (err) {
      d.reject(err)
      return
    }

    if (data.length) {
      d.resolve(data)
    }
  })
  return d.promise
}

P.coroutine(function *() {
  console.log('here')
  let filename = String(yield fs.readFile.promise('./filename.txt'))

  let p1 = [
    fs.readFile.promise(filename),
    fs.readFile.promise(filename),
    fs.readFile.promise(filename)
  ]

  // yield p1
  let files = yield p1

  files.map(f => console.log(f.length))
})()

// readFile(__filename)
//   .then(console.log)
//   .catch(e => console.log(e.stack))

// let p = fs.readFile.promise('./filename.txt')

// readFile(p.then(String))
//   .then(P.resolve)
//   .then(fileBuffer => {
//     let p1 = P.resolve({
//       length() {
//         return fileBuffer.length
//       }
//     })

//     return p1.invoke('length')
//       .then((v1, v2) => {
//         console.log('spread values: ', v1, v2)
//         return 'spread return'
//       })
//   })
//   .then(v => console.log('ended: ', v))
//   .finally(() => {
//     console.log('finally')
//   })
//   .done()