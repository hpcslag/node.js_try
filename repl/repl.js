var repl = require('repl');

//可以由此輸入 node.js 指令
var context = repl.start("$ ").context;

context.util = require('util');

/*
$ .help
    .break Sometimes you get stuck, this gets you out
    .clear Break, and also clear the local context
    .exit Exit the repl
    .help Show repl options
*/