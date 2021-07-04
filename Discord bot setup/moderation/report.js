module.exports =  {
       name: 'report',
       description: 'A simple command to report a user',
       execute(message, args, Discord) {

        const client = new Discord.Client();
        client.commands = new Discord.Collection();


        const guild = client.guilds.cache.get("")/** <-- Add your serverID */
        let channelID = '';/** <-- Add the channelID*/  

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
                    .setColor('#9551B2')
                    .setFooter('Made by Navid_16#6966 with ❤️')
                    .addFields(
                        { name: 'FROM', value: message.author },
                        { name: 'TARGET', value: member },
                        { name: 'REASON', value: reason },
                    )
                    .setTimestamp(Date())

                message.guild.channels.cache.find(t => t.id === channelID).send(reportembed);
            } catch (err) {
                console.log(err);
            }
        }
       }
}