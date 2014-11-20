//假設要判斷100個圖片是否存在，可以用filter
//arr -> array, iterator, callback(results)
var async = require('async'),
	fs = require('fs');
async.filter(['./TestData/imgur.jpg','./TestData/intel.png','./TestData/Hello.jpg'],fs.exists,function(results){
	console.log('還活著的檔案: '+results);
})
//過濾所有還活著的檔案
