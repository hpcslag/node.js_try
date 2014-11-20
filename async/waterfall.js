var async = require('async');

async.waterfall([
	function(callback){callback(null,'hello');}, //'hello'當作callback傳給下一個function的arg1
	function(arg1,callback){callback(true,'three');},//設置這邊掛了
	function(arg1,callback){callback(null,arg1);} //如果arr的第二個function正常執行，將會接收到上一個function傳的callback
	],function(err,result){
		if(err){
			console.log('dead: ' + result);
		}else{
			console.log(result);
		}
	});