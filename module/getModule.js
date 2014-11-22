//第一種方式
var one = require('./exports/exports.function.js');
one.hello();

//第二種方式
var two  = require('./exports/module.exports');
two.hello();

//第三種方式
var three = require('hello');
new three();