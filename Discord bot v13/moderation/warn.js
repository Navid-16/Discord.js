module.exports = {
    name: 'warn',
    description: 'A command to warn a user',
    execute(message, args, Discord, client) {
      

        const setup = require('../setup');
        const guild = client.guilds.cache.get(setup.GuildID())
        let channelID = setup.WarnChannel();

        const roles = setup.WarnRoles();

        let member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");

        if (!message.member.roles.cache.some(r => roles.includes(r.name))) {
            message.channel.send(`${message.author}, that would be nice wouldnt it?`)
        } else if (!member) {
            message.channel.send(`${message.author}, no user found please mention a user`)
        } else if (!reason) {
            message.channel.send(`${message.author}, please provide us the reason of your warn`)
        } else if (reason) {
            try {

                const warnembed = new Discord.MessageEmbed()

                    .setTitle(`${member.user.tag}, has been warned`)
                    .setColor('RANDOM')
                    .setFooter('Made by Navid_16#6966')
                    .addFields(
                        { name: 'STAFF', value: message.author.toString() },
                        { name: 'USER', value: member.toString() },
                        { name: 'REASON', value: reason }
                    )
                    .setTimestamp()

                message.guild.channels.cache.find(t => t.id === channelID).send({ content: member.toString(), embeds: [warnembed] })

            } catch (err) {
                console.log(err)
            }
        }
    }
}