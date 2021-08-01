module.exports = {
    name: 'roulette',
    description: 'russian roulette',

    execute(message, Discord) {

        var db = require('../database/db');
        let user = message.author;

        //win messages
        win1 = `The trigger is pulled, and the revolver clicks. ${user} has lived to survive roulette!`;
        win2 = `The trigger is pulled, but the revolver malfunctions! ${user} is lucky, and lives another day!`;
        win3 = `The trigger is pulled, but ${user} has been saved by magic!`;
        win4 = `The trigger is pulled, but ${user} has lived due to not having anything in their skull to begin with.`;
        win5 = `The trigger is pulled, but ${user}'s skull was so thick the bullet could not penetrate it.`;
        win6 = `The trigger is pulled, but ${user} stopped space and time and dodged the bullet!`;
        win7 = `The trigger is pulled, but ${user} did not die from the bullet, the bullet died from them.`;

        //lose messages
        lose1 = `The trigger is pulled, and the revolver fires! ${user} lies dead in the chat.`;
        lose2 = `The trigger is pulled, and ${user} loses their head!`;
        lose3 = `${user}'s finger slides over the trigger, ${user} crashes to the floor like a sack of flour!`;
        lose4 = `The trigger is pulled, and the hand-cannon goes off with a roar! ${user} lies dead in the chat.`;
        lose5 = `The hammer drops, and the .44 fires! ${user} is now dead in the chat.`;
        lose6 = `The trigger is pulled, and the revolver fires! ${user} is now just a blood splatter on the wall.`;
        lose7 = `The trigger is pulled, and the revolver fires! ${user} ended their miserable life.`;

        const allanswers = [
            win1,
            win2,
            win3,
            win4,
            win5,
            win6,
            win7,
            lose1,
            lose2,
            lose3,
            lose4,
            lose5,
            lose6,
            lose7
        ]

        const answers = Math.floor(Math.random() * allanswers.length);
        const points = Math.floor(Math.random() * 10) + 1;

        var sql0 = `SELECT * FROM ROULETTE WHERE USERID = ${message.author.id}`;
        db.query(sql0, function (err, rows) {
            if (err) throw err;



            if (!rows.length) {
                var sql1 = `INSERT IGNORE INTO ROULETTE (USERID, POINTS) VALUES ('${message.author.id}', '15')`
                db.query(sql1, function (err) {
                    if (err) throw err;
                })
                try {
                    const registered = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`${user}, you have been registered, please run the command again and test your luck`)

                    message.channel.send(registered);
                } catch (err) {
                    console.log(err)
                }
            } else {
                if (allanswers[answers] === win1) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${win1}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} won`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${points} + ${userpoints}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === win2) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${win2}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} won`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${points} + ${userpoints}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === win3) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${win3}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} won`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())
                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${points} + ${userpoints}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === win4) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${win4}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} won`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${points} + ${userpoints}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === win5) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${win5}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} won`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${points} + ${userpoints}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === win6) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${win6}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} won`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${points} + ${userpoints}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === win7) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${win7}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} won`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${points} + ${userpoints}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                }/**lose */else if (allanswers[answers] === lose1) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${lose1}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} lost`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${userpoints} - ${points}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === lose2) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${lose2}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} lost`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${userpoints} - ${points}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === lose3) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${lose3}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} lost`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${userpoints} - ${points}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === lose4) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${lose4}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} lost`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())
                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${userpoints} - ${points}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === lose5) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${lose5}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} lost`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${userpoints} - ${points}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === lose6) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${lose6}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} lost`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${userpoints} - ${points}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                } else if (allanswers[answers] === lose7) {
                    const win = new Discord.MessageEmbed()

                        .setColor('RANDOM')
                        .setTimestamp()
                        .setDescription(`loading the gun...`)

                    message.channel.send(win).then(message => {
                        setTimeout(time, 3000)
                        function time() {
                            const editedeembed = new Discord.MessageEmbed()

                                .setColor('RANDOM')
                                .setTimestamp()
                                .setDescription(`${lose7}`)

                            message.edit(editedeembed).then(message => {
                                setTimeout(time2, 7000)
                                function time2() {
                                    const pointsembed = new Discord.MessageEmbed()

                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .addFields(
                                            {name: `${user.username} lost`, value: points},
                                            {name: `TOTAL POINTS`, value: userpoints}
                                        )
                                        .setAuthor(user.username, user.displayAvatarURL())

                                    message.edit(pointsembed);
                                }
                            });
                        }
                    })
                    let userpoints = rows[0].POINTS;
                    var sql = `UPDATE ROULETTE SET POINTS = ${userpoints} - ${points}`;
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                }

            }
        })
    }
}