var async = require('async'),
	fs = require('fs');

//		  [file1,file2,file3,file.......]
async.map(['./TestData/each.txt'],fs.stat,function(err,results){
	if(err){
		console.log('Process File dead');
	}else{
		console.log(results);
	}
});

//mapSerials -> same map feature, but using Serial