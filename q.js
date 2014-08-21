var q = require('q');
console.log(1);

foo = q.nbind(foo);
bar = q.nbind(bar);
readDir = q.nbind(fs.readdir);

q.all([
	foo(),
	foo(),
	foo()
]).then(function(dataArray) {
	console.log(8);
	assert(data === undefined)
})
.done();
console.log(3);

var value;
function foo() {
	var promiseOrValue = value || bar();

	console.log(2);
	return q.when(promiseOrValue)
		.then(function(data) {
			return q.reject(new Error('asdf'));
			console.log(6);
			return readDir(__dirname);
		})
		.then(function(files) {
			console.log(7);
			assert(Array.isArray(files));
			return value = data;
		});
}

function bar() {
	var d = q.defer();
	console.log(4);
  fs.readFile(__filename, function(err, data) {
		console.log(5);
  	if (err) return d.reject(err);
  	d.resolve(data);
  });

	return d.promise;
}
