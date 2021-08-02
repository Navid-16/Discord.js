module.exports = {
    name: 'clear',
    description: 'A command to clear x amount of messages',
    async execute(message, args, Discord) {

        const client = new Discord.Client();
        client.commands = new Discord.Collection();

        const setup = require('../setup');
        const roles = setup.ClearRoles();

        const deleteAmmount = parseInt(args[0], 10);
    
        if(!message.member.roles.cache.some(r => roles.includes(r.name)) ){
          message.channel.send("That would be nice wouldn't it?")
        }else if(!deleteAmmount || deleteAmmount < 2 || deleteAmmount > 100){
          message.channel.send(`${message.author}, please provide a number between 2 and 100 for the number of messages to delete`)
        }
      
        
        
        const fetched = await message.channel.messages.fetch({limit: deleteAmmount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`**Couldn't delete messages because of: ${error}**`));
      }
    
}