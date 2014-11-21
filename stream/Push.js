var fs = require('fs');
var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('Hello '); //推上第一個Stream 列，使用push
rs.push('World \n');
rs.push(null); //null 要通知 stream 接收者，已經發送完畢了

rs.pipe(process.stdout); //將rs應用到process.stdout

var data = fs.createWriteStream('Output.txt');
rs.pipe(data); //將rs應用後，輸出至Output.txt