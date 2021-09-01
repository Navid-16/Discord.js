module.exports = {
    name: 'apps',
    description: 'Apply for staff team',
    async execute(message, Discord, client) {


        const setup = require('../setup');
        const guild = client.guilds.cache.get(setup.GuildID())
        let channelID = setup.AppChannel();


        message.channel.send(`${message.author}, check your dm!`);
        console.log(`New application has started by --> ${message.author.tag}`);

        try {

            setTimeout(embed, 8000)
            console.log(`sending information embed to ${message.author.tag}`)
            function embed() {
                const embed = new Discord.MessageEmbed()

                    .setTitle('APPLICATION')
                    .setFooter('Made by Navid_16#6966')
                    .setColor('RANDOM')
                    .addFields(
                        { name: 'First Name', value: 'Your name' },
                        { name: 'Last Name', value: 'surname' },
                        { name: 'How old are you', value: 'Your age' },
                        { name: 'Your email', value: 'example@example.com' },
                        { name: 'What is your time zone', value: 'GMT+2' },
                        { name: 'Where are you from', value: 'Your country' },
                        { name: 'What languages are you speaking', value: 'englinsh' },
                        { name: 'Have your ever been punished on our server', value: 'did you ever get ban,mute,etc' },
                        { name: 'On which server your most active on', value: 'what mode do you play most' },
                        { name: 'Have you ever been in a staff team', value: 'do you have any experience' },
                        { name: 'Tell us about your self', value: 'tell us something you would like to know about you' }
                    )

                message.author.send({ embeds: [embed] })
            }

        } catch (err) {
            console.log(err)
        }


        setTimeout(time, 3000)
        function time() {
            message.author.send(`${message.author}, Welcome to your application, a message with informations  will be send in 5 seconds please wait!`)
        }

        setTimeout(time2, 10000)
        function time2() {
            console.log(`starting timer for ${message.author.tag}`)
            message.author.send(`Your application starting at 20 seconds!`)
        }

        setTimeout(time3, 30000)
        function time3() {
            message.author.send(`Your application starting at 10 seconds!`)
        }

        setTimeout(time4, 35000)
        function time4() {
            message.author.send(`Your application starting at 5 seconds!`)
        }

        setTimeout(time5, 36000)
        function time5() {
            message.author.send(`Your application starting at 4 seconds!`)
        }

        setTimeout(time6, 37000)
        function time6() {
            message.author.send(`Your application starting at 3 seconds!`)
        }

        setTimeout(time7, 38000)
        function time7() {
            message.author.send(`Your application starting at 2 seconds!`)
        }

        setTimeout(time8, 39000)
        function time8() {
            message.author.send(`Your application starting at 1 seconds!`)
        }

        setTimeout(time9, 40000)
        function time9() {
            console.log(`starting questions for ${message.author.tag}`)
            const questions = [
                'First Name:',
                'Last Name:',
                'How old are you:',
                'Your email:',
                'What is your time zone:',
                'Where are you from:',
                'What languages are you speaking:',
                'Have your ever been punished on our server:',
                'On which server your most active on:',
                'Have you ever been in a staff team:',
                'Tell us about your self:'
            ]
            let counter = 0

           

            const collector = message.author.dmChannel.createMessageCollector({filter: m => m.author.id === message.author.id, max: questions.length, time: 1200000 })

            message.author.send(questions[counter++]);
            collector.on('collect', (m) => {
                if (counter < questions.length) {
                    message.author.send(questions[counter++])
                }
            })
            collector.on('end', (collected) => {
                console.log(`collected ${collected.size} messages`)

                if (collected.size < questions.length) {
                    message.author.send(`${message.author}, application has been close due inactivity or timeout`);

                } else {
                    message.author.send(`${message.author}, thanks for your time the application has been successfully sent`);
                }



                let i = 0;

                const embedanswers = new Discord.MessageEmbed()
                collected.forEach((value) => {
                    i++;
                    if (i === 1) embedanswers.addField('First Name:', value.content);
                    else if (i === 2) embedanswers.addField('Last Name:', value.content);
                    else if (i === 3) embedanswers.addField('how old are you:', value.content);
                    else if (i === 4) embedanswers.addField('Your email:', value.content);
                    else if (i === 5) embedanswers.addField('What is your time zone:', value.content);
                    else if (i === 6) embedanswers.addField('Where are you from:', value.content);
                    else if (i === 7) embedanswers.addField('What languages are you speaking:', value.content);
                    else if (i === 8) embedanswers.addField('Have your ever been punished on our server:', value.content);
                    else if (i === 9) embedanswers.addField('On which server your most active on:', value.content);
                    else if (i === 10) embedanswers.addField('Have you ever been in a staff team:', value.content);
                    else if (i === 11) embedanswers.addField('Tell us about your self:', value.content);
                    embedanswers.setColor('RANDOM');
                    embedanswers.setTitle('NEW APPLICATION');
                    embedanswers.setFooter('Made by Navid_16#6966');
                    embedanswers.setTimestamp();
                    embedanswers.setAuthor(message.author.tag, message.author.avatarURL());
                    

                })
                message.guild.channels.cache.find(t => t.id === channelID).send({ embeds: [embedanswers] })
            })
        }

    }

}