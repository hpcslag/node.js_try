var async = require('async');

async.each('./TestData/each.txt',function(file,callback){
	//使用file會回傳檔案名稱的下一個字母
  if( file.length > 32 ) {
  	//名稱太長，超過32字的大小
    console.log('This file name is too long');
    callback('File name too long');
  } else {
    // Do work to process file here
    console.log('File processed');
    callback();
  }
},function(err){
	if(err) console.log("Process Error");
	else console.log("Process Fine!");
});

//eachSerials -> using Serial