console.log = function(d){process.stdout.write(d)};

console.log('What is your name: ');

process.stdin.resume();
process.stdin.setEncoding('utf8');  

process.stdin.on('data', function (chunk) {  
  process.stdout.write('Your name: ' + chunk);  
});  

