module.exports = {
    name: '8ball',
    description: 'A magic ball that have all your answers',
    execute(message, args, Discord) {

        const answers = [

            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful'
        ];


        let text = args.slice(0).join(" ");
        var allanswers = Math.floor(Math.random() * answers.length);



        if (!text) {
            message.channel.send(`${message.author}, please ask a question first`)
        } else {
            try {
                const embed = new Discord.MessageEmbed()

                    .setColor('RANDOM')
                    .setFooter('Made by Navid_16#6966 with ❤️')
                    .addFields(
                        { name: 'YOUR QUESTION', value: text },
                        { name: "8BALL ANSWER", value: answers[allanswers] }
                    )

                message.channel.send(embed);

            } catch (err) {
                console.log(err)
            }
        }
    }
}