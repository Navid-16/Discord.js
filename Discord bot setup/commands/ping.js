module.exports = {
    name: 'ping',
    description: 'A command that shows the user ping',
    execute(message, Discord) {

        const client = new Discord.Client();
        client.commands = new Discord.Collection();

        try{
             const msembed = new Discord.MessageEmbed()

             .addField(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)} ms`, '\u200b')
             .setColor('#9551B2')
             .setFooter('Made by Navid_16#6966 with ❤️')
             .setTimestamp(Date())
             .setAuthor(message.author.username, message.author.avatarURL())
             
             message.channel.send(msembed);
        }catch(err){
            console.log(err)
        }
    }
}