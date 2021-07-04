module.exports = {
    name: 'ban',
    description: 'A command to ban a user',
    async execute(message, args, Discord) {
        const client = new Discord.Client();
        client.commands = new Discord.Collection();

        const roles = [
            /**Add your roles here. This roles will have permission for ban*/
                'owner',
                'admin'
            ]; 
            const guild = client.guilds.cache.get("")/** <-- Add your serverID */
            let channelID = '';/** <-- Add the channelID*/

            let member = message.mentions.members.first();
            let reason = args.slice(1).join("  ");
            let server = message.guild.name;

            if(!message.member.roles.cache.some(r => roles.includes(r.name))){
                message.channel.send(`${message.author}, that would be nice wouldn't  it?`)
            }else if(!member){
                message.channel.send(`${message.author}, no user found please mention a user`)
            }else if(!reason){
                message.channel.send(`${message.author}, please provide us the reason of your ban`)
            }else if(reason){
                await member.ban({reason: "reason"});

                try{
                     const banembed = new Discord.MessageEmbed()

                     .setTitle(`${member.user.tag}, has been banned from ${server}`)
                     .setColor('#9551B2')
                     .setFooter('Made by Navid_16#69966 with ❤️')
                     .addFields(
                         {name:'STAFF', value: message.author},
                         {name: 'USER', value: member},
                         {name: 'REASON', value: reason}
                     )
                     .setTimestamp(Date())

                     message.guild.channels.cache.find(t => t.id === channelID).send(banembed)
                }catch(err){
                    console.log(err)
                }
            }
    }
}