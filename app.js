// Importing express
var express = require('express');

// Creating express app Object
var app = express();

// Importing mongoose
var mongoose = require('mongoose');

// Importing models
Projects = require('./models/projectlist');

// Connecting to mongoDB and creating connection Object
mongoose.connect('mongodb://localhost/projecttracker');
var db = mongoose.connection;


/*
* Route Requests
* */

// Get all Projects
app.get('/api/projectlist', function (req, res) {

    Projects.getProjects(function(err, projects){
        if(err){
            throw err;
        }
        res.json(projects);
    });

});


// Setting port
app.listen(3000);
console.log('Application is running at http://localhost:3000');