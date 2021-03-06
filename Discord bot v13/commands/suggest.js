module.exports = {
    name: 'suggest',
    description: 'Suggest anything and then save it to a channel',
    execute(message, args, Discord, client) {

        const setup = require('../setup');
        const guild = client.guilds.cache.get(setup.GuildID());
        let channelID = setup.SuggestionChannel();

        let text = args.slice(0).join(" ");
        

        if(!text){
            message.channel.send(`${message.author}, please type your suggestion`);
            
        }else{
             
            message.channel.send(`${message.author}, Thanks for your suggestion`);

            try{
                   const embed = new Discord.MessageEmbed()

                   .setTitle('NEW SUGGESTION')
                   .setColor('RANDOM')
                   .setFooter('Made by Navid_16#6966')
                   .setDescription(text)
                   .setTimestamp()
                   .setAuthor(message.author.username, message.author.displayAvatarURL())

                   message.guild.channels.cache.find(t => t.id ===channelID).send({embeds: [embed]});
            }catch(err){
                console.log(err)
            }
        }
    }
}