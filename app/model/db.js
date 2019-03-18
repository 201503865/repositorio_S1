'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'seminario1.chrfrzw3onmi.us-west-2.rds.amazonaws.com',
    user     : 'Julyargesh',
    password : '201503865',
    database : 'practica'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
