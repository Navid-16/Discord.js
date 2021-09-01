module.exports = {
    name: 'serverinfo',
    description: 'A command to view the server information',
    async execute(message, Discord, client) {
       

        var setup = require('../setup');
        const guild = client.guilds.cache.get(setup.GuildID())
        let server = message.guild.name;
        let usercount = message.guild.memberCount.toString();
        let owner = await message.guild.fetchOwner();
        const ownerOfServer = owner.toString();


        try {
            const serverinfoembed = new Discord.MessageEmbed()

                .setTitle(`${server}`)
                .setColor('RANDOM')
                .setFooter('Made by Navid_16#6966')
                .addFields(
                    { name: 'SERVER OWNER', value: ownerOfServer},
                    { name: 'TOTAL MEMBERS', value: usercount},
                    { name: 'CREATED AT', value: new Date(message.guild.createdAt).toLocaleDateString() }
                )
                .setTimestamp()
                .setThumbnail(message.guild.iconURL())

            message.channel.send({ embeds: [serverinfoembed] });
        } catch (err) {
            console.log(err)
        }
    }
}