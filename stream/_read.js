var Readable = require('stream').Readable;
var rs = Readable();

rs._read = function(){ //_read()方法實現了只有在data接受者請求data才向可ReadStream中壓入data
	rs.push("Hello World!!!");
	rs.push(null);
};
rs.pipe(process.stdout);