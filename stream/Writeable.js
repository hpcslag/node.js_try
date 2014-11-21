var Writable = require('stream').Writable;
var ws = Writable();

ws._write = function(chunk, enc,next){
	console.dir(chunk);
	next();
};
process.stdout.write("請輸入: ");
process.stdin.pipe(ws);