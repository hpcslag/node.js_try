var http = require('http');
var count = 0;
http.createServer(function(req,res){
	count ++;
	if(count == 5){
		process.exit();
	}
	console.log(count);
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('Hello World: '+count);
}).listen(80);
console.log('Server run as 127.0.0.1');