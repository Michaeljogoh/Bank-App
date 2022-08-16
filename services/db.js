const mysql = require('mysql');


const client = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});


 const connectionDB = async () =>{
    await client.connect()
    console.log('Connected to MySQL Server')
 }
 connectionDB();

 module.exports = {client}

