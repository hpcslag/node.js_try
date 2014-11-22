var events = require('events').EventEmitter;

var emit = new events();

emit.on('hello',function(){
	console.log('Hello');
});

setTimeout(function(){
	emit.emit('hello');
},2000);