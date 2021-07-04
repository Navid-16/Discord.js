module.exports = {
    name: 'serverinfo',
    description: 'A command to view the server information',
    execute(message, args, Discord){

        const client = new Discord.Client();
        client.commands = new Discord.Collection();

        const guild = client.guilds.cache.get("834186526040653834")/** <-- Add your serverID */
        let server = message.guild.name;
        let usercount = message.guild.memberCount;
        let owner = message.guild.owner;
        let region =  message.guild.region;

        try{
              const serverinfoembed = new Discord.MessageEmbed()

              .setTitle(`${server}`)
              .setColor('#9551B2')
              .setFooter('Made by Navid_16#6966 with ❤️')
              .addFields(
                  {name: 'SERVER OWNER', value: owner},
                  {name: 'TOTAL MEMBERS', value: usercount},
                  {name: 'SERVER REGION', value: region},
                  {name: 'CREATED AT', value: new Date(message.guild.createdAt).toLocaleDateString()}
              )
              .setTimestamp(Date())
              .setThumbnail(message.guild.iconURL())

              message.channel.send(serverinfoembed);
        }catch(err){
            console.log(err)
        }
    }
}