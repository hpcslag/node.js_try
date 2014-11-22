var fs = require('fs');
fs.stat('./test.txt',function(err,stats){
	if(stats.isFile()){
		console.log('this is file');
	}
	/*
	stats.isFile() 是檔案
	stats.isDirectory() 是目錄
	stats.isBlockDevice()
	stats.isCharacterDevice()
	stats.isSymbolicLink() (only valid with fs.lstat())
	stats.isFIFO()
	stats.isSocket()
	*/
});