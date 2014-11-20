function* waterfall(funcs,init){
	var local = init;
	while(funcs.length>0){
		local = yield funcs.sh
	}
}