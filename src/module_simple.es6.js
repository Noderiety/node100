console.log('Foo is being declared')

class Foo {
  constructor() {
		this.state = {foo: 0, bar: 0}
  }

	foo() {
		this.state.foo++
		console.log('hello foo:', this.state)
	}

	bar() {
		this.state.bar++
		console.log('hello bar:', this.state)
	}
}

module.exports = Foo