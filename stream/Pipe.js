var http = require('http');
var fs = require('fs');
 
//所有類型的Stream都是使用 .pipe() 來建立一個输入输出對象，接收一個可讀的Stream(src) 並將其數據输出到可寫的Stream(dest)
var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/Test.txt');
    stream.pipe(res);
});
server.listen(80);