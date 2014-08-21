var util = require('util'),
		Mammal = require('./mammal')

function DuckBilledPlatypus() {
	DuckBilledPlatypus.super_.call(this)
	console.log('quack')

}

util.inherits(DuckBilledPlatypus, Mammal)

DuckBilledPlatypus.prototype.hasDuckBill = true
DuckBilledPlatypus.prototype.someMethod = function() {

}

module.exports = {
	DuckBilledPlatypus: DuckBilledPlatypus
}