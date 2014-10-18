var fs = require('fs');

function noSynchronousIO(module) {
  if (require.main !== module) {
    throw new Error('Must call noSynchronousIO at end of main');
  }

  module.constructor.prototype.require = function erroringRequire(name) {
    throw new Error('require(\''+name+'\') called after initial tick');
  };

  Object.keys(fs).forEach(function (name) {
    // All asyncs have a *Sync counterpart
    name += 'Sync';
    if (fs.hasOwnProperty(name)) {
      fs[name] = function () {
        throw new Error('fs.'+name+' called after initial tick');
      };
    }
  });
}

module.exports.noSynchronousIO = noSynchronousIO;
