var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');

var app = express();
var PORT = process.env.PORT || 3000;
var api_data = [];
var apiNextId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('TechSoL API is working');

});


app.get('/data', function(req, res) {
	db.data.findAll().then(function(data) {
		res.json(data);
	}, function(e) {
		res.status(500).send();
	});
});

app.post('/data', function(req, res) {
	var body = _.pick(req.body, 'firstName', 'lastName', 'gender', 'dateOfBirth', 'address', 'email', 'contact');

	db.data.create(body).then(function (data) {
		res.json(data.toJSON());
	}, function (e) {
		res.status(400).json(e);
	});
});

db.sequelize.sync({force:true}).then(function() {
	app.listen(PORT, function() {
		console.log('Express listening on port ' + PORT + '!');
	});
});