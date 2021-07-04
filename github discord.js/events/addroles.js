module.exports  = client => {

   
    client.on('guildMemberAdd', member =>{
        var role = member.guild.roles.cache.find(r => r.name === "YOUR ROLE HERE");
        member.roles.add(role)
    });
}