var spawn = require('child_process').spawn,
	grep  = spawn('grep', ['ssh']);;
console.log('Spawned child pid: ' + grep.pid);
