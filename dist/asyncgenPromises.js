"use strict";
require('traceur-source-maps').install(require('traceur'));
var q = require('q'),
    fs = require('fs'),
    co = require("co"),
    request = require('request'),
    readFile = q.denodeify(fs.readFile);
co(function*() {
  var requestUrl = String(yield readFile('./url.txt'));
  return yield function*() {
    return yield q.nfcall(request, requestUrl);
  };
})((function(err, result) {
  if (err)
    return console.log(err.stack);
  console.log(String(result));
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jZ2VuUHJvbWlzZXMuZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxBQUFDLENBQUMscUJBQW9CLENBQUMsUUFBUSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUMsQ0FBQztFQUFLLENBQUEsQ0FBQSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsR0FBRSxDQUFDO0FBQzNFLEtBQUMsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLElBQUcsQ0FBQztBQUNqQixLQUFDLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxJQUFHLENBQUM7QUFDakIsVUFBTSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDO0FBRTNCLFdBQU8sRUFBSSxDQUFBLENBQUEsVUFBVSxBQUFDLENBQUMsRUFBQyxTQUFTLENBQUM7QUFHckMsQ0FBQyxBQUFDLENBQUMsVUFBVSxBQUFDO0lBQ1QsQ0FBQSxVQUFTLEVBQUksQ0FBQSxNQUFLLEFBQUMsQ0FBQyxLQUFNLENBQUEsUUFBTyxBQUFDLENBQUMsV0FBVSxDQUFDLENBQUM7QUFDbkQsT0FBTyxNQUFNLFdBQVMsQUFBQyxDQUFFO0FBQ3hCLFNBQU8sTUFBTSxDQUFBLENBQUEsT0FBTyxBQUFDLENBQUMsT0FBTSxDQUFHLFdBQVMsQ0FBQyxDQUFDO0VBQzNDLENBQUE7QUFDRCxDQUFDLEFBQUMsRUFBQyxTQUFDLEdBQUUsQ0FBRyxDQUFBLE1BQUssQ0FBTTtBQUNsQixLQUFJLEdBQUU7QUFBRyxTQUFPLENBQUEsT0FBTSxJQUFJLEFBQUMsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFBO0FBQUEsQUFDckMsUUFBTSxJQUFJLEFBQUMsQ0FBQyxNQUFLLEFBQUMsQ0FBQyxNQUFLLENBQUMsQ0FBQyxDQUFBO0FBQzVCLEVBQUMsQ0FBQTtBQUNEIiwiZmlsZSI6ImFzeW5jZ2VuUHJvbWlzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCd0cmFjZXVyLXNvdXJjZS1tYXBzJykuaW5zdGFsbChyZXF1aXJlKCd0cmFjZXVyJykpO2xldCBxID0gcmVxdWlyZSgncScpXG5cdCwgZnMgPSByZXF1aXJlKCdmcycpXG5cdCwgY28gPSByZXF1aXJlKFwiY29cIilcblx0LCByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpXG5cdC8vICwgcmVxdWVzdFVybCA9ICdodHRwOi8vZ29vZ2xlLmNvbSdcblx0LCByZWFkRmlsZSA9IHEuZGVub2RlaWZ5KGZzLnJlYWRGaWxlKVxuXG5cbmNvKGZ1bmN0aW9uKiAoKSB7XG5cdGxldCByZXF1ZXN0VXJsID0gU3RyaW5nKHlpZWxkIHJlYWRGaWxlKCcuL3VybC50eHQnKSlcblx0cmV0dXJuIHlpZWxkIGZ1bmN0aW9uKigpIHtcblx0XHRyZXR1cm4geWllbGQgcS5uZmNhbGwocmVxdWVzdCwgcmVxdWVzdFVybCk7XG5cdH1cbn0pKChlcnIsIHJlc3VsdCkgPT4ge1xuICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5sb2coZXJyLnN0YWNrKVxuICBjb25zb2xlLmxvZyhTdHJpbmcocmVzdWx0KSlcbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=