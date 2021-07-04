module.exports = {
    name: 'info',
    description: 'A command to view info for a user',
    execute(message, args, Discord){

        const client = new Discord.Client();
        client.commands = new Discord.Collection();

        let user = message.mentions.members.first();
        let server = message.guild.name;
        

        if(!user){
            message.channel.send(`${message.author}, no user found please mention a user`)
        }else if(user){
            try{
                  const userembed = new Discord.MessageEmbed()

                  .setTitle('USER INFO')
                  .setColor('#9551B2')
                  .addFields(
                      {name:'USER', value: user},
                      {name: 'USER ID', value: user.id},
                      {name: 'USER TAG', value: user.user.tag},
                      {name: 'BOT', value: user.user.bot},
                      {name: 'LINK TO THE USER AVATAR', value: user.user.avatarURL()},
                      {name: `JOINED ${server} AT`, value: new Date(user.joinedTimestamp).toLocaleDateString()}
                  )
                  .setAuthor(user.user.username, user.user.avatarURL())
                  .setThumbnail(user.user.avatarURL())
                  .setTimestamp(Date())
                  .setFooter('Made by Navid_16#6966 with ❤️')

                  message.channel.send(userembed);
            }catch(err){
                console.log(err)
            }
        }
    }
}