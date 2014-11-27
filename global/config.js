module.exports = function(){
	global.__defineGetter__('note',function(){
		return {
			say: "Hello"
		}
	});
};