var child_process = require('child_process');

child_process.exec('ping google.com',function(err,stdout,stderr){
	stdout.setEncoding('utf8');
	console.log(stdout);
});