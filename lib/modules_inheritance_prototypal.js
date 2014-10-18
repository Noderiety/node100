var util = require('util')

function Character(x, y) {
  this.x = x;
  this.y = y;
}

util.inherits(Monster, Character)
function Monster (x, y, name) {
  Monster.super_.call(this, x, y);
  this.name = name;
  this.health_ = 100;
}

Monster.prototype.attack = function attack(character) {
  Monster.super_.attack.call(this, character);
}

Object.defineProperty(Monster.prototype, 'isAlive', {
	get: function() { return this.health_ > 0; }
})

Object.defineProperty(Monster.prototype, 'health', {
	get: function() { return this.health_; },
	set: function(value) {
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
})

module.exports = Monster