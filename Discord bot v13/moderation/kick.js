module.exports = {
    name: 'kick',
    description: 'A command to kick user from the server',
    async execute(message, args, Discord, client) {

       

        
        const setup = require('../setup');
        const roles = setup.kickRoles();
        const guild = client.guilds.cache.get(setup.GuildID())
        let channelID = setup.KickChannel();

        let member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        let server = message.guild.name;

        if (!message.member.roles.cache.some(r => roles.includes(r.name))) {
            message.channel.send("That would be nice wouldn't it?")
        } else if (!member) {
            message.channel.send(`${message.author}, no user found please mention a user`)
        } else if (!reason) {
            message.channel.send(`${message.author}, please provide us the reason of your kick!`)
        } else if (reason) {
            await member.kick(reason);

            try {
                const kickembed = new Discord.MessageEmbed()

                    .setTitle(`${member.user.tag} has been kicked from ${server}`)
                    .setColor('RANDOM')
                    .setFooter('Made by Navid_16#6966')
                    .addFields(
                        { name: 'STAFF', value: message.author.toString() },
                        { name: 'USER', value: member.user.tag.toString() },
                        { name: 'REASON', value: reason },
                    )
                    .setTimestamp(Date())

                message.guild.channels.cache.find(t => t.id === channelID).send({ embeds: [kickembed] });
            } catch (err) {
                console.log(err);
            }
        }



    }// end 
}