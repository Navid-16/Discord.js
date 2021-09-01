module.exports = {
    name: 'unban',
    description: 'A command to unban a user',
    async execute(message, args, Discord, client) {

    


        
        const setup = require('../setup');
        const roles = setup.UnbanRoles();
        const guild = client.guilds.cache.get(setup.GuildID())
        let channelID = setup.UnbanChannel();

        let server = message.guild.name;
        let userid = args[0]
        let reason = args.slice(1).join(" ");

        if (!message.member.roles.cache.some(r => roles.includes(r.name))) {
            message.channel.send(`${message.author}, that  would be nice wouldn't it?`)
        } else if (!userid) {
            message.channel.send(`${message.author}, no ID found please type the ID of the user`)
        } else if (!reason) {
            message.channel.send(`${message.author}, please provide us the reason of your unban`)
        } else if (reason) {
            message.guild.bans.fetch().then(async bans => {
                if (bans.size === 0) {
                    message.channel.send(`${message.author}, no one is banned`)
                }
                let BannedUser = bans.find(ban => ban.user.id == userid)
                if (!BannedUser) {
                    message.channel.send(`${message.author}, this  ID ins't banned`)
                }
                await message.guild.members.unban(BannedUser.user, reason)
            })

            try {
                const unbanembed = new Discord.MessageEmbed()

                    .setTitle(`The ${userid} ID has been unbanned from ${server}`)
                    .setColor('RANDOM')
                    .setFooter('Made by Navid#6966_16')
                    .addFields(
                        { name: 'STAFF', value: message.author.toString() },
                        { name: 'USER ID', value: userid },
                        { name: 'REASON', value: reason }
                    )
                    .setTimestamp(Date())

                message.guild.channels.cache.find(t => t.id === channelID).send({ embeds: [unbanembed]})
            } catch (err) {
                console.log(err)
            }
        }
    }
}