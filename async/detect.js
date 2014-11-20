var async = require('async'),
	fs = require('fs');

async.detect(['./TestData/imgur.jpg','./TestData/intel.png','ff.pd'],fs.exists,function(result){
	console.log(result);
});

//第一個文件是否還活著? 也有Serial版