var events = require('events').EventEmitter;
var emit = new events();


emit.addListener('hello',function(){console.log('Hello');});

setTimeout(function(){emit.emit('hello');},2000);