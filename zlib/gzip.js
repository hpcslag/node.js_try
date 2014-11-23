var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream('./TestDemo/input.txt');
var out = fs.createWriteStream('./TestDemo/input.txt.gz');

inp.pipe(gzip).pipe(out);