const mysql = require('mysql');

var con = mysql.createConnection({

    host: "HOSTNAME OR IP",
    user: "DB USERNAME",
    password: "DB PASSWORD",
    database: "DB NAME"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected to the DB succefully!")
});

// create roulette table
var sql2 =`CREATE TABLE IF NOT EXISTS ROULETTE (USERID VARCHAR(255) NOT NULL, POINTS INT NOT NULL, UNIQUE(USERID))`;
con.query(sql2, function(err, rows){
    if(err)throw err;
})


module.exports = con;