var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection ({
	host:'localhost',
	port:3306,
	user:'root',
	password:'8725183sd',
	database:'bamazon',

});

connection.connect(function(err){
	console.log('Connected as id: '+connection.threadId);
})

