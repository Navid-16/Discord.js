module.exports = {
    name: 'kill',
    description: 'A kill command',
    execute(message, Discord) {

        let member = message.mentions.members.first();

        const notmenioned = [
            'Just died',
            "You can't afford to die. You 'll lose too much money",
            'Tried to reload the gun but accidentally suicide',
            '(✖╭╮✖)',
            '(×_×)',
            '✖‿✖',
        ];

        const mentioned = [
            `${message.author} Just kill ${member}`,
            `${message.author} Has buried alive ${member}`,
            `I may look calm, but in my head i have kill you 3 times ${member}`,
            `${message.author} Throw ${member} off the roof`,
            `${message.author} (　-_･) ︻デ═一 ▸ ${member}`,
            `${message.author} (⌐■_■)–︻╦╤─ ${member}`,
            `${message.author} ┌( ͡° ͜ʖ ͡°)=ε/̵͇̿̿/’̿’̿ ̿' ${member}`,
        ];


        const randomnomention = Math.floor(Math.random() * notmenioned.length);
        const randommentioned = Math.floor(Math.random() * mentioned.length);

        if (!member) {
            try {
                const embed = new Discord.MessageEmbed()

                    .setColor('RANDOM')
                    .setFooter('Made by Navid_16#6966')
                    .setTimestamp(Date())
                    .setDescription(`${message.author}, ${notmenioned[randomnomention]}`)

                message.channel.send({ embeds: [embed]})
            } catch (err) {
                console.log(err)
            }
        }else if(member) {

            try {
                const embed = new Discord.MessageEmbed()

                    .setColor('RANDOM')
                    .setFooter('Made by Navid_16#6966')
                    .setTimestamp(Date())
                    .setDescription(`${mentioned[randommentioned]}`)

                message.channel.send({ embeds: [embed]})
            } catch (err) {
                console.log(err)
            }
        }


    }
}