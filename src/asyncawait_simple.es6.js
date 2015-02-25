var fs = require('fs')
require('songbird')

async function main() {
  let promises = [
    fs.promise.readFile(__filename),
    fs.promise.readFile(__filename)
  ]
  let data = await Promise.all(promises)
  console.log(data)
}

main().done()
