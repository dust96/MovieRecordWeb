var mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: 'qaplwsok01',
    database : 'movierecord'
});

connection.connect();

module.exports = connection;