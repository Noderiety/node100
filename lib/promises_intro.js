"use strict";
require('traceur-source-maps').install(require('traceur'));
var Promise = require('songbird'),
    fs = require('fs');
readAllFilesInDir(__dirname).then((function(fileBuffers) {
  var length = 0;
  fileBuffers.forEach((function(fileBuffer) {
    length += fileBuffer.length;
  }));
  return length;
})).then(console.log);
function readAllFilesInDir(dir) {
  return fs.promise.readdir(dir).then((function(files) {
    files.map(console.log);
    throw new Error('fail');
    return Promise.all(files.map((function(file) {
      return fs.promise.readFile(__dirname + '/' + file);
    })));
  }));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2VzX2ludHJvLmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7RUFBSyxDQUFBLE9BQU0sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFVBQVMsQ0FBQztBQUN6RixLQUFDLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxJQUFHLENBQUM7QUFJbkIsZ0JBQWdCLEFBQUMsQ0FBQyxTQUFRLENBQUMsS0FDdEIsQUFBQyxFQUFDLFNBQUMsV0FBVTtJQUNaLENBQUEsTUFBSyxFQUFJLEVBQUE7QUFDYixZQUFVLFFBQVEsQUFBQyxFQUFDLFNBQUMsVUFBUyxDQUFNO0FBQ25DLFNBQUssR0FBSyxDQUFBLFVBQVMsT0FBTyxDQUFBO0VBQzNCLEVBQUMsQ0FBQTtBQUNELE9BQU8sT0FBSyxDQUFBO0FBQ2IsRUFBQyxLQUNHLEFBQUMsQ0FBQyxPQUFNLElBQUksQ0FBQyxDQUFBO0FBT2xCLE9BQVMsa0JBQWdCLENBQUUsR0FBRTtBQUM1QixPQUFPLENBQUEsRUFBQyxRQUFRLFFBQVEsQUFBQyxDQUFDLEdBQUUsQ0FBQyxLQUN4QixBQUFDLEVBQUMsU0FBQyxLQUFJO0FBQ1YsUUFBSSxJQUFJLEFBQUMsQ0FBQyxPQUFNLElBQUksQ0FBQyxDQUFBO0FBQ3JCLFFBQU0sSUFBSSxNQUFJLEFBQUMsQ0FBQyxNQUFLLENBQUMsQ0FBQTtBQUN0QixTQUFPLENBQUEsT0FBTSxJQUFJLEFBQUMsQ0FDakIsS0FBSSxJQUFJLEFBQUMsRUFBQyxTQUFDLElBQUcsQ0FBTTtBQUNuQixXQUFPLENBQUEsRUFBQyxRQUFRLFNBQVMsQUFBQyxDQUFDLFNBQVEsRUFBSSxJQUFFLENBQUEsQ0FBSSxLQUFHLENBQUMsQ0FBQTtJQUNsRCxFQUFDLENBQ0YsQ0FBQTtFQUNELEVBQUMsQ0FBQTtBQUNIO0FBb0NPIiwiZmlsZSI6InByb21pc2VzX2ludHJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtsZXQgUHJvbWlzZSA9IHJlcXVpcmUoJ3NvbmdiaXJkJyksXG5cdFx0ZnMgPSByZXF1aXJlKCdmcycpXG5cbi8vIGNvbnNvbGUubG9nKCdmaWxlbmFtZTogJXMnLCBmaXJzdEZpbGVuYW1lKVxuXG5yZWFkQWxsRmlsZXNJbkRpcihfX2Rpcm5hbWUpXG5cdC50aGVuKChmaWxlQnVmZmVycyApID0+IHtcblx0XHRsZXQgbGVuZ3RoID0gMFxuXHRcdGZpbGVCdWZmZXJzLmZvckVhY2goKGZpbGVCdWZmZXIpID0+IHtcblx0XHRcdGxlbmd0aCArPSBmaWxlQnVmZmVyLmxlbmd0aFxuXHRcdH0pXG5cdFx0cmV0dXJuIGxlbmd0aFxuXHR9KVxuXHQudGhlbihjb25zb2xlLmxvZylcblx0Ly8gLmNhdGNoKChlKSA9PiB7XG5cdC8vIFx0Y29uc29sZS5sb2coZS5zdGFjaylcblx0Ly8gXHRwcm9jZXNzLmV4aXQoKVxuXHQvLyB9KVxuXHQvLyAuZG9uZSgpXG5cbmZ1bmN0aW9uIHJlYWRBbGxGaWxlc0luRGlyKGRpcikge1xuXHRyZXR1cm4gZnMucHJvbWlzZS5yZWFkZGlyKGRpcilcblx0XHQudGhlbigoZmlsZXMpID0+IHtcblx0XHRcdGZpbGVzLm1hcChjb25zb2xlLmxvZylcblx0XHRcdHRocm93IG5ldyBFcnJvcignZmFpbCcpXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdGZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBmcy5wcm9taXNlLnJlYWRGaWxlKF9fZGlybmFtZSArICcvJyArIGZpbGUpXG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0fSlcbn1cblxuLy8gZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSB7XG4vLyBcdGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxuLy8gXHRyZXR1cm4gbnVsbFxuLy8gfVxuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vIFx0cHJvbWlzZS50aGVuKChkYXRhKSA9PiB7XG4vLyBcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW1xuLy8gXHRcdFx0XHRwcm9taXNlLFxuLy8gXHRcdFx0XHRuZXdQcm9taXNlXG4vLyBcdFx0XHRdKVxuLy8gXHRcdH0pXG4vLyBcdFx0LnRoZW4oKHZhbHVlcykgPT4ge1xuLy8gXHRcdFx0Y29uc29sZS5sb2codmFsdWVzKVxuLy8gXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdmYWlsJylcbi8vIFx0XHRcdHJldHVybiB2YWx1ZXNbMF0ubGVuZ3RoICsgdmFsdWVzWzFdLmxlbmd0aFxuLy8gXHRcdH0pXG4vLyBcdFx0LnRoZW4oXG4vLyBcdFx0XHRjb25zb2xlLmxvZyxcbi8vIFx0XHRcdChlKSA9PiB7XG4vLyBcdFx0XHRcdGNvbnNvbGUubG9nKFN0cmluZyhlKSlcbi8vIFx0XHRcdFx0dGhyb3cgZVxuLy8gXHRcdFx0fVxuLy8gXHRcdClcbi8vIFx0XHQuY2F0Y2goIGUgPT4ge1xuLy8gXHRcdFx0Y29uc29sZS5sb2coU3RyaW5nKGUpKVxuLy8gXHRcdH0pXG4vLyB9LCAyMDAwKVxuLy8gLy8gcHJvbWlzZS5jYXRjaChmdW5jdGlvbihlKSB7XG4vLyAvLyBcdGNvbnNvbGUubG9nKCdmYWlsOlxcblxcbiVzJywgZS5zdGFjaylcbi8vIC8vIH0pXG5cbi8vIC8vIGZzLnJlYWRGaWxlKGZpbGVuYW1lLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbi8vIC8vIFx0Y29uc29sZS5sb2coU3RyaW5nKGRhdGEpKVxuLy8gLy8gfSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=