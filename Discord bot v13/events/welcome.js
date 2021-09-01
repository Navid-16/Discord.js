module.exports = client => {
	
    const Discord = require('discord.js');

    

    client.on('guildMemberAdd', async member => {

		const setup = require('../setup');
        const guild = client.guilds.cache.get(setup.GuildID())
		let channelID = setup.WelcomeChannel();
		let server = member.guild.name;


		try{
    
			 const embed = new Discord.MessageEmbed()

			 .setDescription(`WELCOME ${member} TO ${server}`)
			 .setColor('RANDOM')
			 .setFooter('Made by Navid_16#6966')
			 .setTimestamp(Date())
			 .setAuthor(member.user.username, member.user.displayAvatarURL())
			 .setThumbnail(member.user.displayAvatarURL())

			member.guild.channels.cache.find(t => t.id === channelID).send({ embeds: [embed]});
		}catch(err){
			console.log(err)
		}
       
})}
