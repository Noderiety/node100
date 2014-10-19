/*
require: (startup) sync-IO allowed, first tick
configure: no-IO, after sync-IO, before async-IO
intialization: async-IO setup
*/
require
fs.readFileSync(__filename)


function configure(configFile) {
  var controllers = JSON.parse(fs.readFile(configFile)).controllers;
  controllers = controllers.map(function(controller, k) {
	  return require(__dirname + '/' + controllers);
  });
}
