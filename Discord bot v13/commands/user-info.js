module.exports = {
    name: 'info',
    description: 'A command to view info for a user',
    execute(message, args, Discord){

        let user = message.mentions.members.first();
        let server = message.guild.name;
        

        if(!user){
            message.channel.send(`${message.author}, no user found please mention a user`)
        }else if(user){
            try{
                  const userembed = new Discord.MessageEmbed()

                  .setTitle('USER INFO')
                  .setColor('RANDOM')
                  .addFields(
                      {name:'USER', value: user.toString()},
                      {name: 'USER ID', value: user.id.toString()},
                      {name: 'USER TAG', value: user.user.tag.toString()},
                      {name: 'BOT', value: user.user.bot.toString()},
                      {name: 'LINK TO THE USER AVATAR', value: user.user.avatarURL().toString()},
                      {name: `JOINED ${server} AT`, value: new Date(user.joinedTimestamp).toLocaleDateString()}
                  )
                  .setAuthor(user.user.username, user.user.avatarURL())
                  .setThumbnail(user.user.avatarURL())
                  .setTimestamp()
                  .setFooter('Made by Navid_16#6966')

                  message.channel.send({embeds: [userembed]});
            }catch(err){
                console.log(err)
            }
        }
    }
}