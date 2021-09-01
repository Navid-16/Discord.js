const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const welcome = require('./events/welcome');
const addroles = require('./events/addroles');
const leave = require('./events/leave');
const setup = require('./setup');
const { Client, Intents, Message, Collection } = require('discord.js');

var db =  require('./database/db');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_TYPING], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.commands = new Collection();



const moderationFiles = fs.readdirSync('./moderation').filter(file => file.endsWith('.js'));

for (const file of moderationFiles) {
	const command = require(`./moderation/${file}`);
	client.commands.set(command.name, command);
}
const applicationFiles = fs.readdirSync('./application').filter(file => file.endsWith('.js'));

for (const file of applicationFiles) {
    const command = require(`./application/${file}`);
    client.commands.set(command.name, command);
}

const commandsFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandsFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const databaseFiles = fs.readdirSync('./database').filter(file => file.endsWith('.js'));

for (const file of databaseFiles) {
    const command = require(`./database/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot running...');

    welcome(client);
    addroles(client);
    leave(client);
    setup;
});

client.on('messageCreate', message => {
	

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
   
    const command = args.shift().toLowerCase();

    if (command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord, client);
    }
    if (command === 'report') {
        client.commands.get('report').execute(message, args, Discord, client);
    }
    if (command === 'warn') {
        client.commands.get('warn').execute(message, args, Discord, client);
    }
    if (command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord, client);
    }
    if (command === 'unban') {
        client.commands.get('unban').execute(message, args, Discord, client);
    }
    if (command === 'clear') {
        client.commands.get('clear').execute(message, args, Discord);
    }
    if (command === 'apps') {
        client.commands.get('apps').execute(message, Discord, client);
    }
    if (command === 'info') {
        client.commands.get('info').execute(message, args, Discord);
    }
    if (command === 'serverinfo') {
        client.commands.get('serverinfo').execute(message, Discord, client);
    }
    if (command === 'ping') {
        client.commands.get('ping').execute(message, Discord);
    }
    if (command === 'suggest') {
        client.commands.get('suggest').execute(message, args, Discord, client);
    }
    if (command === '8ball') {
        client.commands.get('8ball').execute(message, args, Discord);
    }
    if (command === 'slap') {
        client.commands.get('slap').execute(message, Discord);
    }
    if (command === 'kill') {
        client.commands.get('kill').execute(message, Discord);
    }
    if (command === 'sus') {
        client.commands.get('sus').execute(message, Discord);
    }
    if (command === 'roulette') {
        client.commands.get('roulette').execute(message, Discord);
    }
    if (command === 'help') {
        client.commands.get('help').execute(message, Discord);
    }

});

client.login(token);