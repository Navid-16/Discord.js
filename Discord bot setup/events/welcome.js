module.exports = client => {

    const Discord = require('discord.js');

    

    client.on('guildMemberAdd', async member => {

		const guild = client.guilds.cache.get("")/** <-- Add your serverID */
		let channelID = '';/** <-- Add the channelID*/
		let server = member.guild.name;


		try{
    
			 const embed = new Discord.MessageEmbed()

			 .setDescription(`WELCOME ${member} TO ${server}`)
			 .setColor('RANDOM')
			 .setFooter('Made by Navid_16#6966 with ❤️')
			 .setTimestamp(Date())
			 .setAuthor(member.user.username, member.user.displayAvatarURL())
			 .setThumbnail(member.user.displayAvatarURL())

			member.guild.channels.cache.find(t => t.id === channelID).send(embed);
		}catch(err){
			console.log(err)
		}
       
})}