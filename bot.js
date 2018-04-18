const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

//S T A R T______________________________________________________________________________________________

client.on('message', message =>{
 if (message.author.id == 436208284463267861 && message.content.includes("!start")) {
	message.react("👌");  //Acknowledge
function strt () {
function routine1(){
	function step1(){
	message.channel.send('!mine');
	}
	function step2(){
	message.channel.send('!collect');
	}
	function step3(){
	message.channel.send('!memes');
	}
	function step4(){	
	message.channel.send('!buy max miner');
	}
	function step5(){	
		message.channel.send('!prestige YESIMSURE');
	}
	var one = setTimeout(function() {step1(1)}, 200);
	var two = setTimeout(function() {step2(1)}, 3000);
	var three = setTimeout(function() {step3(1)}, 5000);
	var four = setTimeout(function() {step4(1)}, 7000);
	var five = setTimeout(function() {step5(1)}, 9000);
	}

var routineA = setTimeout(function() {routine1(1)}, 200);
		}
	var initial2 = setInterval(function() {strt(1)}, 11000);
 }
});
//________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

