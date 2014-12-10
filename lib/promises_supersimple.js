"use strict";
require('traceur-source-maps').install(require('traceur'));
var fs = require('fs'),
    q = require('q'),
    readFile = q.denodeify(fs.readFile),
    filenames = ['index.js', 'q.js', 'gulpfile.js'];
function readFiles(filenames) {
  var promises = q.when(filenames).then((function(filenames) {
    filenames.map((function(filename) {
      return readFile(__dirname + '/../' + filename);
    }));
  }));
  return q.all(promises);
}
readFiles(filenames).then((function(files) {
  var sum = 0;
  files.forEach((function(file) {
    return sum += file.length;
  }));
  return sum;
})).then((function(length) {
  return console.log(length);
})).catch((function(err) {
  return console.log(err.stack);
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2VzX3N1cGVyc2ltcGxlLmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7RUFBSyxDQUFBLEVBQUMsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLElBQUcsQ0FBQztBQUM5RSxJQUFBLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxHQUFFLENBQUM7QUFDZixXQUFPLEVBQUksQ0FBQSxDQUFBLFVBQVUsQUFBQyxDQUFDLEVBQUMsU0FBUyxDQUFDO0FBQ2xDLFlBQVEsRUFBSSxFQUNYLFVBQVMsQ0FDVCxPQUFLLENBQ0wsY0FBWSxDQUNiO0FBR0YsT0FBUyxVQUFRLENBQUUsU0FBUTtJQUN0QixDQUFBLFFBQU8sRUFBSSxDQUFBLENBQUEsS0FBSyxBQUFDLENBQUMsU0FBUSxDQUFDLEtBQUssQUFBQyxFQUFDLFNBQUEsU0FBUTtBQUM1QyxZQUFRLElBQUksQUFBQyxFQUFDLFNBQUEsUUFBTyxDQUFLO0FBQ3pCLFdBQU8sQ0FBQSxRQUFPLEFBQUMsQ0FBQyxTQUFRLEVBQUUsT0FBSyxDQUFBLENBQUUsU0FBTyxDQUFDLENBQUE7SUFDMUMsRUFBQyxDQUFBO0VBQ0YsRUFBQztBQUNGLE9BQU8sQ0FBQSxDQUFBLElBQUksQUFBQyxDQUFDLFFBQU8sQ0FBQyxDQUFBO0FBQ3RCO0FBRUEsUUFBUSxBQUFDLENBQUMsU0FBUSxDQUFDLEtBQ2QsQUFBQyxFQUFDLFNBQUEsS0FBSTtJQUNMLENBQUEsR0FBRSxFQUFJLEVBQUE7QUFDVixNQUFJLFFBQVEsQUFBQyxFQUFDLFNBQUEsSUFBRztTQUFLLENBQUEsR0FBRSxHQUFLLENBQUEsSUFBRyxPQUFPO0VBQUEsRUFBQyxDQUFBO0FBQ3hDLE9BQU8sSUFBRSxDQUFBO0FBQ1YsRUFBQyxLQUNHLEFBQUMsRUFBQyxTQUFBLE1BQUs7T0FBSyxDQUFBLE9BQU0sSUFBSSxBQUFDLENBQUMsTUFBSyxDQUFDO0FBQUEsRUFBQyxNQUM5QixBQUFDLEVBQUMsU0FBQSxHQUFFO09BQUssQ0FBQSxPQUFNLElBQUksQUFBQyxDQUFDLEdBQUUsTUFBTSxDQUFDO0FBQUEsRUFBQyxDQUFBO0FBQUEiLCJmaWxlIjoicHJvbWlzZXNfc3VwZXJzaW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCd0cmFjZXVyLXNvdXJjZS1tYXBzJykuaW5zdGFsbChyZXF1aXJlKCd0cmFjZXVyJykpO2xldCBmcyA9IHJlcXVpcmUoJ2ZzJyksXG5cdFx0cSA9IHJlcXVpcmUoJ3EnKSxcblx0XHRyZWFkRmlsZSA9IHEuZGVub2RlaWZ5KGZzLnJlYWRGaWxlKSxcblx0XHRmaWxlbmFtZXMgPSBbXG5cdFx0XHQnaW5kZXguanMnLFxuXHRcdFx0J3EuanMnLFxuXHRcdFx0J2d1bHBmaWxlLmpzJ1xuXHRcdF1cblxuXG5mdW5jdGlvbiByZWFkRmlsZXMoZmlsZW5hbWVzKSB7XG5cdGxldCBwcm9taXNlcyA9IHEud2hlbihmaWxlbmFtZXMpLnRoZW4oZmlsZW5hbWVzID0+IHtcblx0XHRcdGZpbGVuYW1lcy5tYXAoZmlsZW5hbWUgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVhZEZpbGUoX19kaXJuYW1lKycvLi4vJytmaWxlbmFtZSlcblx0XHRcdH0pXG5cdFx0fSlcblx0cmV0dXJuIHEuYWxsKHByb21pc2VzKVxufVxuXG5yZWFkRmlsZXMoZmlsZW5hbWVzKVxuXHQudGhlbihmaWxlcyA9PiB7XG5cdFx0bGV0IHN1bSA9IDBcblx0XHRmaWxlcy5mb3JFYWNoKGZpbGUgPT4gc3VtICs9IGZpbGUubGVuZ3RoKVxuXHRcdHJldHVybiBzdW1cblx0fSlcblx0LnRoZW4obGVuZ3RoID0+IGNvbnNvbGUubG9nKGxlbmd0aCkpXG5cdC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLnN0YWNrKSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=