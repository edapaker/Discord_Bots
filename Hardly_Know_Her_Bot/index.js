// const { tokens } = require('./../tokens.js');
const Discord = require('discord.js');
const client = new Discord.Client();

// command to make BOT online:
// nodemon --inspect index.js

client.on('ready', ()=>{
	console.log("Hardly-Know-Her Bot is Online!");
});

client.on('message', msg=>{
	if (msg.author.bot) return;
	var desired = msg.content.replace(/[^\w\s]/gi, '')
	var words = desired.split(" ");

	for (var i = 0; i < words.length; i++){
		if (words[i].length >= 2){
			if (words[i].substring(words[i].length - 2, words[i].length).toLowerCase() === "er"){
				var response = words[i] + "??? I hArDLy KNow hEr!"
				msg.reply(response);
			}
		}
	}
	return;
});

client.login("ODExMzM4MDAxNzczNzU2NDU5.YCwvZQ.D1ec1-k3wYvsr1TuFF6mVGaTK1w");
