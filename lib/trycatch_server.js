"use strict";
require('traceur-source-maps').install(require('traceur'));
var http = require('http'),
    trycatch = require('trycatch').configure({'long-stack-traces': true});
http.createServer((function(req, res) {
  console.log('Handling request...');
  trycatch((function() {
    setTimeout(function() {
      throw new Error('Fail.');
    }, 1000);
  }), (function(err) {
    res.writeHead(500);
    res.end(err.stack);
  }));
})).listen(8000);
console.log('Listening at http://127.0.0.1:8000');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyeWNhdGNoX3NlcnZlci5lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0VBQUssQ0FBQSxJQUFHLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxNQUFLLENBQUM7QUFDakYsV0FBTyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsVUFBUyxDQUFDLFVBQVUsQUFBQyxDQUFDLENBQUMsbUJBQWtCLENBQUUsS0FBRyxDQUFDLENBQUM7QUFFdEUsR0FBRyxhQUFhLEFBQUMsRUFBQyxTQUFDLEdBQUUsQ0FBRyxDQUFBLEdBQUU7QUFDekIsUUFBTSxJQUFJLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxDQUFBO0FBQ2pDLFNBQU8sQUFBQyxFQUFDLFNBQUEsQUFBQyxDQUFLO0FBQ2QsYUFBUyxBQUFDLENBQUMsU0FBUSxBQUFDLENBQUU7QUFDckIsVUFBTSxJQUFJLE1BQUksQUFBQyxDQUFDLE9BQU0sQ0FBQyxDQUFBO0lBQ3hCLENBQUcsS0FBRyxDQUFDLENBQUE7RUFDUixJQUFHLFNBQUEsR0FBRSxDQUFLO0FBQ1QsTUFBRSxVQUFVLEFBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQTtBQUNqQixNQUFFLElBQUksQUFBQyxDQUFDLEdBQUUsTUFBTSxDQUFDLENBQUE7RUFDbEIsRUFBQyxDQUFBO0FBQ0YsRUFBQyxPQUFPLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQTtBQUVkLE1BQU0sSUFBSSxBQUFDLENBQUMsb0NBQW1DLENBQUMsQ0FBQTtBQUFBIiwiZmlsZSI6InRyeWNhdGNoX3NlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7bGV0IGh0dHAgPSByZXF1aXJlKCdodHRwJylcblx0LCB0cnljYXRjaCA9IHJlcXVpcmUoJ3RyeWNhdGNoJykuY29uZmlndXJlKHsnbG9uZy1zdGFjay10cmFjZXMnOnRydWV9KVxuXG5odHRwLmNyZWF0ZVNlcnZlcigocmVxLCByZXMpID0+IHtcblx0Y29uc29sZS5sb2coJ0hhbmRsaW5nIHJlcXVlc3QuLi4nKVxuXHR0cnljYXRjaCgoKSA9PiB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRmFpbC4nKVxuXHRcdH0sIDEwMDApXG5cdH0sIGVyciA9PiB7XG5cdFx0cmVzLndyaXRlSGVhZCg1MDApXG5cdFx0cmVzLmVuZChlcnIuc3RhY2spXG5cdH0pXG59KS5saXN0ZW4oODAwMClcblxuY29uc29sZS5sb2coJ0xpc3RlbmluZyBhdCBodHRwOi8vMTI3LjAuMC4xOjgwMDAnKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==