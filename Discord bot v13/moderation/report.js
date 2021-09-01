module.exports = {
    name: 'report',
    description: 'A simple command to report a user',
    execute(message, args, Discord, client) {

        

        const setup = require('../setup');
        const guild = client.guilds.cache.get(setup.GuildID())
        let channelID = setup.ReportChannel();

        let member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");

        if (!member) {
            message.channel.send(`${message.author}, please mention the user you want`)
        } else if (!reason) {
            message.channel.send(`${message.author},please provide us the reason of your report!`)
        } else if (reason) {

            try {
                const reportembed = new Discord.MessageEmbed()

                    .setTitle(`${member.user.tag} has been reported`)
                    .setColor('RANDOM')
                    .setFooter('Made by Navid_16#6966')
                    .addFields(
                        { name: 'FROM', value: message.author.toString() },
                        { name: 'TARGET', value: member.toString() },
                        { name: 'REASON', value: reason },
                    )
                    .setTimestamp()

                message.guild.channels.cache.find(t => t.id === channelID).send({ embeds: [reportembed] });
            } catch (err) {
                console.log(err);
            }
        }
    }
}