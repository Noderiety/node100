let trycatch = require('trycatch').configure({'long-stack-traces':true}),
  _ = require('lodash')

trycatch(() => {
  _.map(['Error 1', 'Error 2'], v => {
    setTimeout(()=> throw new Error(v), 10)
  })
}, err => console.log("Async error caught:\n", err.stack))