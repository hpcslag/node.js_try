var async = require('async'),
	fs = require('fs');

async.parallel([function(callback){callback(null,'one')},function(callback){callback(null,'two')}],function(err,results){
	console.log(results); //也能輸出陣列
})

//假設要取得裡面的資料，可以搭配map實作