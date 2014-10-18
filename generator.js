function* gen(start) {
	console.log('2: ', start);

	let one = yield 100
	console.log('5: ', one);

	let two = yield 200
  console.log('8: ', two);

  return 300;
}

let it = gen('zero');
console.log(1)
console.log('3: ', it.next());
console.log(4)
console.log('6: ', it.next('ONE_'));
console.log(7)
console.log('9: ', it.next('TWO_'));
console.log(it.next())
