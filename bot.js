const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message =>{
 if (message.author.id == 260241663018926080 && message.content.includes("!start")) {
	message.react("👌");  //Acknowledge
	var mine = setInterval(function(){step1(1)}, 3000);
	}
	function step1(){
	message.channel.send('!mine');
	message.channel.send('!collect');
	var buy = setInterval(function (){step2(1)}, 3000);
	}
	function step2(){	
	message.channel.send('!buy max fracker');
	message.channel.send('!buy max swarm');
	message.channel.send('!buy max robot');
	message.channel.send('!buy max miner');
	message.channel.send('!prestige YESIMSURE');
	clearInterval(buy);
	//clearInterval(mine);
	var mine = setInterval(function(){step1(1)}, 3000);
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
