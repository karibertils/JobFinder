var express = require('express');
var jobModel = require('./models/job');
var jobsData = require("./jobs-data.js")

var app = express();

require("./jobs-service.js")(jobsData, app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
	res.render('index');
});

jobsData.connectDB('mongodb://localhost/jobfinder')
	.then(function() {
		console.log('connected to mongodb successfully!');
		jobsData.seedJobs();
	});

app.listen(3000);
