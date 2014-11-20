var async = require('async'),
	fs = require('fs');

async.auto({
  readData: function(cb, results){
    fs.readFile('./TestData/each.txt', 'utf-8', cb);
  }
}, callback);