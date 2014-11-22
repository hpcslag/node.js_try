var util = require('util');

//正規輸出
var date = util.format('%s - %s \n',"1月","2日");
console.log(date);

//顯示訊息，可以用log或debug
process.stdout.write('顯示錯誤訊息: ');
util.debug("Bad! ");

console.log('\n');

//將任意東西轉為字串, 後面帶入true可以啟動showHidden 顯示更多資訊
var str = util.inspect({name:"MacTaylor"});
console.log(str);

/* 判斷對象，會回傳boolean
util.isArray( )
你可以用 [], new Array

util.isRegExp( )
帶入/some regexp/, 或new RegExp('another regexp')

util.isDate( )
你可以用 new Date()

util.isError( )
你可以用new Error,new TypError()

util.pump( )已經棄用

*/
