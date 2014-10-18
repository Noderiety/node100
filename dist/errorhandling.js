"use strict";
require('traceur-source-maps').install(require('traceur'));
var fs = require('fs'),
    trycatch = require('trycatch');
trycatch.configure({'long-stack-traces': true});
trycatch(function() {
  fs.readFile(__filename, function(err, data) {
    console.log('success:', data);
  });
}, function(err) {
  console.log('Caught: ', err.stack);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yaGFuZGxpbmcuZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxBQUFDLENBQUMscUJBQW9CLENBQUMsUUFBUSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUMsQ0FBQztFQUFLLENBQUEsRUFBQyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsSUFBRyxDQUFDO0FBQzdFLFdBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFVBQVMsQ0FBQztBQUVoQyxPQUFPLFVBQVUsQUFBQyxDQUFDLENBQUMsbUJBQWtCLENBQUcsS0FBRyxDQUFDLENBQUMsQ0FBQTtBQUU5QyxPQUFPLEFBQUMsQ0FBQyxTQUFRLEFBQUMsQ0FBRTtBQUNuQixHQUFDLFNBQVMsQUFBQyxDQUFDLFVBQVMsQ0FBRyxVQUFTLEdBQUUsQ0FBRyxDQUFBLElBQUcsQ0FBRztBQUMzQyxVQUFNLElBQUksQUFBQyxDQUFDLFVBQVMsQ0FBRyxLQUFHLENBQUMsQ0FBQTtFQUM3QixDQUFDLENBQUE7QUFDRixDQUFHLFVBQVMsR0FBRSxDQUFHO0FBQ2hCLFFBQU0sSUFBSSxBQUFDLENBQUMsVUFBUyxDQUFHLENBQUEsR0FBRSxNQUFNLENBQUMsQ0FBQTtBQUNsQyxDQUFDLENBQUE7QUFBQSIsImZpbGUiOiJlcnJvcmhhbmRsaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtsZXQgZnMgPSByZXF1aXJlKCdmcycpXG5cdCwgdHJ5Y2F0Y2ggPSByZXF1aXJlKCd0cnljYXRjaCcpXG5cbnRyeWNhdGNoLmNvbmZpZ3VyZSh7J2xvbmctc3RhY2stdHJhY2VzJzogdHJ1ZX0pXG5cbnRyeWNhdGNoKGZ1bmN0aW9uKCkge1xuXHRmcy5yZWFkRmlsZShfX2ZpbGVuYW1lLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcblx0XHRjb25zb2xlLmxvZygnc3VjY2VzczonLCBkYXRhKVxuXHR9KVxufSwgZnVuY3Rpb24oZXJyKSB7XG5cdGNvbnNvbGUubG9nKCdDYXVnaHQ6ICcsIGVyci5zdGFjaylcbn0pIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9