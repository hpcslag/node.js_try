translate.prototype._transform = function(data,encoding,callback){
	this.push(data);
	callback();
}

transform.prototype._transform = function(data,encoing,callback){
	callback(null,data);
};
