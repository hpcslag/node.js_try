var child_process = require('child_process');

var fork = child_process.fork('./Demo/child.js');

fork.on('message',function(message){
	console.log('PARENT got message: '+message.foo);
	//拿到child.js 傳送回來的資訊
});

fork.send({hello:'world'});
//接著傳送