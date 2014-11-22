var write = function(){};

write.prototype.log = function(d){
	process.stdout.write(d+'\n');
};

var console = new write();

console.log('aa');
process.exit();
process.abort();
process.argv.slice(2); //取得元素
process.argv.slice(2).map();
process.nextTick(function(){ console.log('This is callback'); });