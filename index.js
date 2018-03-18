var http = require('http');
var server = http.createServer();
var fs = require('fs');


server.on('request', function (request, response) {
	if (request.method === 'GET' && request.url === '/hello') {
		response.setHeader("Content-Type", "text/html; charset=utf-8");
		fs.readFile('./index.html', 'utf8', function (err, data) {
			response.write(data);
			response.end();
		});
	} else {
		fs.readFile('./404-ghost.png', function (err, data) {
			response.statusCode = 404;
			response.write(data);
			response.end();
		});
	}
});

server.listen(9000);