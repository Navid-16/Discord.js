module.exports = {

    name: 'help',
    description: 'Help command',
    execute(message, Discord) {

        try {
             const embed = new Discord.MessageEmbed()

             .setTitle('INFORMATION')
             .setColor('RANDOM')
             .setFooter('Made by Navid_16#6966 with ❤️')
             .setTimestamp()
             .setDescription('All available commands')
             .addFields(
                 {name:'8ball', value:'Ask a question and the 8ball have the answer for you!'},
                 {name: 'kill', value:'Want to suicide or kill someone esle?'},
                 {name: 'ping', value:'Are you lagging? check your ms'},
                 {name: 'serverinfo', value:'Have questions about the server?'},
                 {name: 'slap', value:'Someone make you mad? slap him'},
                 {name: 'suggest', value:'Have new ideas? suggest them'},
                 {name: 'sus', value:'How much sus are you?'},
                 {name: 'info', value:'Have any questions about a user?'},
                 {name: 'apps', value:'Want to become a staff member? make your application'},
                 {name: 'report', value:'Does someone start getting annoy or breaking the server rules? report him'},
                 {name: 'ban', value:'requires staff role'},
                 {name: 'clear', value:'requires staff role'},
                 {name: 'kick', value:'requires staff role'},
                 {name: 'unban', value:'requires staff role'},
                 {name: 'warn', value:'requires staff role'}
             )
             

             message.channel.send(embed);
        } catch (err) {
            console.log(err)
        }
    }
}