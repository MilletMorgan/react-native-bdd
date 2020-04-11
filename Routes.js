const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
var qs = require('qs');
var assert = require('assert');

const connection = mysql.createPool({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'react'
});

// Starting our app.
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
	// Connecting to the database.
	connection.getConnection(function (err, connection) {

		// Executing the MySQL query (select all data from the 'users' table).
		connection.query('SELECT * FROM users', function (error, results, fields) {
			// If some error occurs, we throw an error.
			if (error) throw error;

			// Getting the 'response' from the database and sending it to our route. This is were the data is.
			res.send(results)
		});
	});
});


app.post('/newuser', function (req, res) {
	console.clear()

	const jsonStr = JSON.stringify(req.body, null, 2)
	const qsParse = qs.parse(req.body);
	const qsStrObj = qs.stringify(qsParse);
	const qsStrReq = qs.stringify(req.body);


	console.log("JSON.stringify : ", jsonStr)
	console.log("qs.parse(req.body) : ", qsParse)
	console.log("qs.stringify(qsParse) : ", qsStrObj)
	console.log("qs.stringify(req.body) : ", qsStrReq)
	console.log("req.body : ", req.body)
	console.log("req.body.foo : ", req.body.foo)

	let username = req.body.username;

	connection.getConnection(function (err) {
		if (err) throw new err;
		// console.log("Connected to bdd");

		const sql = "INSERT INTO users(username) VALUES ('" + username + "')";
		connection.query(sql, function (err, result) {
			if (err) throw err;

			// console.log("1 record inserted, result : ");
			res.send('POST request')
		});
	});
})

// Starting our server.
app.listen(3000, () => {
	console.log('Go to http://localhost:3000/users so you can see the data.');
});