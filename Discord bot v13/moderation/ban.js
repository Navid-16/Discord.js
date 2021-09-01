module.exports = {
    name: 'ban',
    description: 'A command to ban a user',
    async execute(message, args, Discord, client) {
        

        
        const setup = require('../setup');
        const roles = setup.BanRoles();
        const guild = client.guilds.cache.get(setup.GuildID());
        let channelID = setup.BanChannel();
        let member = message.mentions.members.first();
        let reason = args.slice(1).join("  ");
        let server = message.guild.name;

        if (!message.member.roles.cache.some(r => roles.includes(r.name))) {
            message.channel.send(`${message.author}, that would be nice wouldn't  it?`)
        } else if (!member) {
            message.channel.send(`${message.author}, no user found please mention a user`)
        } else if (!reason) {
            message.channel.send(`${message.author}, please provide us the reason of your ban`)
        } else if (reason) {
            await member.ban({ reason: "reason" });

            try {
                const banembed = new Discord.MessageEmbed()

                    .setTitle(`${member.user.tag}, has been banned from ${server}`)
                    .setColor('RANDOM')
                    .setFooter('Made by Navid_16#69966')
                    .addFields(
                        { name: 'STAFF', value: message.author.toString() },
                        { name: 'USER', value: member.toString() },
                        { name: 'REASON', value: reason }
                    )
                    .setTimestamp()

                message.guild.channels.cache.find(t => t.id === channelID).send({ embeds: [banembed] })
            } catch (err) {
                console.log(err)
            }
        }
    }
}