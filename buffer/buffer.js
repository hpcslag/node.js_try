var buf = new Buffer(256);
console.log(buf.toString());

console.log(buf.toJSON());
console.log('是Buffer嗎? ');
new Buffer.isBuffer(buf);

var buf = new Buffer(8);
buf.writeDoubleBE(0xdeadbeefcafebabe, 0);

console.log(buf);

buf.writeDoubleLE(0xdeadbeefcafebabe, 0);

console.log(buf);