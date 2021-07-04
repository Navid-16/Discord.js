module.exports = {
    name: 'warn',
    description: 'A command to warn a user',
    async execute(message, args, Discord) {
        const client = new Discord.Client();
        client.commands = new Discord.Collection();


        const guild = client.guilds.cache.get("")/** <-- Add your serverID */
        let channelID = '';/** <-- Add the channelID*/

        const roles = [
            /**Add your roles here. This roles will have permission for warn*/
            'owner',
            'admin'
        ];

        let member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        let author = message.author;

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
                    .setColor('#9551B2')
                    .setFooter('Made by Navid_16#6966 with ❤️')
                    .addFields(
                        { name: 'STAFF', value: message.author },
                        { name: 'USER', value: member },
                        { name: 'REASON', value: reason }
                    )
                    .setTimestamp(Date())

                message.guild.channels.cache.find(t => t.id === channelID).send(member, warnembed)

            } catch (err) {
                console.log(err)
            }
        }
    }
}