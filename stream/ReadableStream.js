var fs = require('fs');

var readable = fs.createReadStream('Test.txt'); //getReadableStreamSomehow();
readable.setEncoding('utf-8');

//Maroon 5 ,OnePublic Music Nice!

readable.on('readable',function(){
    console.log('This is Readable Event');
});

readable.on('data',function(chunk){
	console.log(chunk); //This is Buffer
});


readable.on('end',function(chunk){
	console.log(chunk);
});