module.exports = {
    name: 'slap',
    description: 'A command to slap someone',
    execute(message, Discord) {

        const random = [
            '( ;´0｀)ﾂ))□｀)',
            '(* ＇Д＇)ﾉｼ)ﾟﾛﾟ)',
            '(￣ε(#￣)☆╰o(￣▽￣///)'
        ];

        let member = message.mentions.members.first();
        var randomtext = Math.floor(Math.random() * random.length);

        if (!member) {
            message.channel.send(`${message.author}, no user found...`)
        } else {
            try {
                const embed = new Discord.MessageEmbed()

                    .setColor('RANDOM')
                    .setFooter('Made by Navid_16#6966')
                    .setDescription(`${message.author} ${random[randomtext]} ${member}`)

                message.channel.send({embeds:  [embed]});
            } catch (err) {
                console.log(err)
            }
        }
    }
}