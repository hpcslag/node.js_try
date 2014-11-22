var exec = require('child_process').exec;

/*callback寫法，最少要等到事件結束才會發送
exec('node ./server.js',function(error,stdout,stderr){
	console.log('stdout: '+stdout);
});*/

//改用另一種寫法，每次動作，每次對事件監聽!

/*
	child_process.exec(command, [options], callback)
	child_process.spawn(command, [args], [options])
*/

var child = exec('node server.js');
child.stdout.on('data',function(data){
	console.log('stdout: '+data);
});

child.stderr.on('data',function(data){
	console.log(data);
});

child.on('close',function(code){
	console.log('code: '+code);
});