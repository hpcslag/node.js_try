var url = require('url');

var request = 'https://google.com';

var repath = url.parse(request);

console.log(repath.pathname);