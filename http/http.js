var http = reuqire('http');

http.createServer(function(req,res){
	res.writeHead('Content-Type':'text/html');
	res.write('<h1>Hello World!</h1>');
	res.end();
}).listen(80,'127.0.0.1');