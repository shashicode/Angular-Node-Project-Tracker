// Importing express
var express = require('express');

// Creating express app Object
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
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

// Add Project
app.post('/api/projectlist', function (req, res) {
    var project = req.body;
    Projects.addProject(project, function(err, project){
        if(err){
            throw err;
        }
        res.json(project);
    });

});

// Remove Project
app.delete('/api/projectlist/:_id', function (req, res) {
    var id = req.params._id;
    Projects.removeProject(id, function(err, project){
        if(err){
            throw err;
        }
        res.json(project);
    });

});


// Setting port
app.listen(3000);
console.log('Application is running at http://localhost:3000');