var isWin = /^win/.test(process.platform);

if(!isWin){
	kill(process.pid);
}else{
	var cp = require('child_process');
	cp.exec('taskkill /PID '+process.pid + ' /T /F',function(error,stdout,stderr){

	});
}