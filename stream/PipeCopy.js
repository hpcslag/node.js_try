var fs = require('fs');

var src = fs.createReadStream('Test.txt');
var dest = fs.createWriteStream('Output.txt');

src.pipe(dest);