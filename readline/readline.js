var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("What do you think of node.js? ",function(answer){
	console.log('Thank for your valuable feeback:',answer);
	rl.close();
});

//Read Line Enter:
rl.on('line',function(cmd){
	console.log(cmd);
})

//Line pause:
rl.on('pause', function() {
  console.log('Readline paused.');
});

//Line resume:
rl.on('resume', function() {
  console.log('Readline resumed.');
});

