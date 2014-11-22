
process.on('message',function(message){
	console.log('child got message: '+message);
});
process.send({foo:'bar'});