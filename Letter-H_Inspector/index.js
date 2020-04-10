const { tokens } = require('./../tokens.js');
const Discord = require('discord.js');
const client = new Discord.Client();

// command to make BOT online:
// nodemon --inspect index.js

client.on('ready', ()=>{
	console.log("Letter-H Inspector is Online!");
});

client.on('message', msg=>{
	if (msg.author.bot) return;
	if (msg.content.toLowerCase().includes('h')){
			msg.reply('You\'ve used the letter \'H\'!');
			return;
	}
});

client.login(tokens.H_token);
