module.exports = {
    name: 'sus',
    description: 'How much sus are you',
    execute(message, Discord) {

        const random = Math.floor(Math.random() * 101)

        try {
            const embed = new Discord.MessageEmbed()

                .setColor('RANDOM')
                .setFooter('Made by Navid_16#6966 with ❤️')
                .setTimestamp(Date())
                .setDescription(`${message.author}, You are ${random}% sus`)

                message.channel.send(embed);
        } catch (err) {
            console.log(err)
        }
    }
}