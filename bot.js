const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message =>{
 if (message.author.id == 260241663018926080 && message.content.includes("!start")) {
	message.react("👌");  //Acknowledge
	var mine = setInterval(function(){step1(1)}, 3000);
	var buy = setInterval(function (){step2(1)}, 4000);
	}
	function step1(){
	message.channel.send('!mine');
	}
	function step2(){	
	message.channel.send('!buy max fracker');
	var end = setInterval(function (){step3(1)}, 30000);
	}
	function step3(){	
	clearInterval(mine);
	clearInterval(buy);
	var mine = setInterval(function(){step1(1)}, 3000);
	var buy = setInterval(function (){step2(1)}, 4000);
	}
});


	
client.on('message', message =>{
if (message.author.id == 260241663018926080 && message.content.includes("!stop")) {
message.react("👌");
clearInterval(buy);
clearInterval(mine);
	}
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
