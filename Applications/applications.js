const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require ('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('starting applications');
});

client.on('message', async message  => {
	
   if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === "apps"){
       message.channel.send(`${message.author}, check your dm!`)
    console.log(`New application has started by --> ${message.author.tag}`);
      
        try{
            
            setTimeout(embed,8000) 
            console.log(`sending information embed to ${message.author.tag}`)
            function embed(){
            const embed = new Discord.MessageEmbed()
            
            .setTitle('APPLICATION')
            .setFooter('Made by Navid#6966 with ❤️')
            .setColor('#9551B2')
            .addFields(
                {name: 'First Name', value: 'Your name'},
                {name: 'Last Name', value: 'surname'},
                {name: 'How old are you', value: 'Your age'},
                {name: 'Your email', value: 'example@example.com'},
                {name: 'What is your time zone', value: 'GMT+2'},
                {name: 'Where are you from', value: 'Your country'},
                {name: 'What languages are you speaking', value: 'englinsh'},
                {name: 'Have your ever been punished on our server', value: 'did you ever get ban,mute,etc'},
                {name: 'On which server your most active on', value: 'what mode do you play most'},
                {name: 'Have you ever been in a staff team', value: 'do you have any experience'},
                {name: 'Tell us about your self', value: 'tell us something you would like to know about you'}
            )
                
            message.author.send(embed)
            }

        }catch(err){
            console.log(err)
        }
    
    
    setTimeout(time,3000)
    function time(){
        message.author.send(`${message.author}, Welcome to your application, a message with informations  will be send in 5 seconds please wait!`)
    }
    
    setTimeout(time2,10000)
    function time2(){
        console.log(`starting timer for ${message.author.tag}`)
        message.author.send(`Your application starting at 20 seconds!`)
    }
    
    setTimeout(time3,30000)
    function time3(){
        message.author.send(`Your application starting at 10 seconds!`)
    }
    
     setTimeout(time4,35000)
    function time4(){
        message.author.send(`Your application starting at 5 seconds!`)
    }
    
    setTimeout(time5,36000)
    function time5(){
       message.author.send(`Your application starting at 4 seconds!`)
    }
    
    setTimeout(time6,37000)
    function time6(){
        message.author.send(`Your application starting at 3 seconds!`)
    }
    
    setTimeout(time7,38000)
    function time7(){
       message.author.send(`Your application starting at 2 seconds!`)
    }
    
    setTimeout(time8,39000)
    function time8(){
        message.author.send(`Your application starting at 1 seconds!`)
    }
    
  setTimeout(time9,40000)
    function time9(){
        console.log(`starting questions for ${message.author.tag}`)
        const questions =[
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
    
    const filter = m => m.author.id === message.author.id
    
     const collector = message.author.dmChannel.createMessageCollector(filter, {
                             max: questions.length,
                             time: 1200000 //20 min
                             
    })
       
     message.author.send(questions[counter++]);
        console.log(`1st question has been sent to ${message.author.tag}`);
    collector.on('collect', (m) => {
        if(counter < questions.length) {
            console.log(`sending more questions to ${message.author.tag} until answer them all`);
            message.author.send(questions[counter++])   
        }
    })
      collector.on('end', (collected) => {
            console.log(`collected ${collected.size} messages`)
           
          if(collected.size < questions.length){
             message.author.send(`${message.author}, application has been close due inactivity or timeout`);
              return
          }
            message.author.send(`${message.author}, thanks for your time the application has been successfully sent`);
          
           let counter = 0 
           
            let i = 0;
          
            const embed = new Discord.MessageEmbed()
            collected.forEach((value) => {
                i++;
                     if (i === 1) embed.addField('First Name:', value.content);
                else if (i === 2) embed.addField('Last Name:', value.content);
                else if (i === 3) embed.addField('how old are you:', value.content);
                else if (i === 4) embed.addField('Your email:', value.content);
                else if (i === 5) embed.addField('What is your time zone:', value.content);
                else if (i === 6) embed.addField('Where are you from:', value.content);
                else if (i === 7) embed.addField('What languages are you speaking:', value.content);
                else if (i === 8) embed.addField('Have your ever been punished on our server:', value.content);
                else if (i === 9) embed.addField('On which server your most active on:', value.content);
                else if (i === 10) embed.addField('Have you ever been in a staff team:', value.content);
                else if (i === 11) embed.addField('Tell us about your self:', value.content);
                embed.setColor('#9551B2');
                embed.setTitle('NEW APPLICATION');
                embed.setFooter('Made by Navid#6966 with ❤️');
                embed.setTimestamp(Date());
                embed.setAuthor(message.author.tag, message.author.avatarURL() );
            console.log(questions[counter++], value.content)
                
})
              message.guild.channels.cache.find(t => t.id == channelID here /* <- edit your channel ID*/).send(embed)
        })
    }
        
    }
});

client.login(token);