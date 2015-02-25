let net = require("net"),
    repl = require("repl"),
    util = require('util')

let connections = 5
let r = repl.start({
  useGlobal: true,
  prompt: "node via stdin> ",
  input: process.stdin,
  output: process.stdout
});

function hello(a) {
  console.log('hello world: ', a)
}

let context = {hello, connections, r, net, repl}
util._extend(r.context, context)