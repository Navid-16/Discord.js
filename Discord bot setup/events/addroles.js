module.exports  = client => {

  const setup = require('../setup');

    client.on('guildMemberAdd', member =>{
        var role = member.guild.roles.cache.find(r => r.name === setup.AddRoles());
        member.roles.add(role)
    });
}