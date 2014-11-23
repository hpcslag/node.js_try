var dns = require('dns');
var href = 'www.heroku.com';
var type = 'A';

//列出所有的dns
//這個type可以是陣列
dns.resolve(href,type,function(err,result){
	if(err){
		throw err;
	}
	console.log('DNS解析結果是: ',result);
});


//将一个域名（比如 'google.com'）解析为第一个找到的 A 记录（IPv4）或 AAAA 记录（IPv6）
//地址族 family 可以是数字 4 或 6，缺省为 null 表示同时允许 IPv4 和 IPv6 地址族。
dns.lookup(href,4,function(err,result){
	console.log('第一個找到的紀錄: '+result);
});


//只找 IPv4 的紀錄
dns.resolve4(href, function(err,result){
	console.log('只解析 IPv4 紀錄為: '+result);
});

//只找 IPv6 的紀錄
dns.resolve6(href, function(err,result){
	console.log('只解析 IPv6 紀錄為: '+result);
});

//找到TXT紀錄
dns.resolveTxt(href, function(err,result){
	console.log('TXT查詢紀錄為: '+result);
});



//更多請到官方或Resource觀看