var cluster = require('cluster');
var http = require('http');
var cpu = require('os').cpus().length;

if(cluster.isMaster){
	for(var i=0;i<cpu;i++){
		cluster.fork();
	}
	cluster.on('exit',function(woker,code,signal){
		console.log('woker '+woker.process.pid + 'died');
	});
}else{
	http.createServer(function(req,res){
		res.writeHead(200);
		res.end('hello world');
	}).listen(80,'127.0.0.1',function(){console.log(ins + 'server run as 127.0.0.1');});
}