var crypto = require('crypto');

//顯示支持的密碼
var chiphers = crypto.getCiphers();
//console.log(chiphers);

//顯示支持的加密方式
var hashes = crypto.getHashes();
//console.log(hashes);

//MD5加密
crypto.createHash('md5').update("欲加密文字").digest('hex');