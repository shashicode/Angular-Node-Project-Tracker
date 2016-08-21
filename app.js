var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/angular-frontend'));
app.use(bodyParser.json());

var mongoose = require('mongoose');


Projects = require('./models/projectlist');


mongoose.connect('mongodb://localhost/projecttracker');
var db = mongoose.connection;


/*
* Route Requests
* */

app.get('/api/projectlist', function (req, res) {

    Projects.getProjects(function(err, projects){
        if(err){
            throw err;
        }
        res.json(projects);
    });

});

app.post('/api/projectlist', function (req, res) {
    var project = req.body;
    Projects.addProject(project, function(err, project){
        if(err){
            throw err;
        }
        res.json(project);
    });

});

app.delete('/api/projectlist/:_id', function (req, res) {
    var id = req.params._id;
    Projects.removeProject(id, function(err, project){
        if(err){
            throw err;
        }
        res.json(project);
    });

});

app.put('/api/projectlist/:_id', function (req, res) {
    var id = req.params._id;
    var project = req.body;
    Projects.updateProject(id, project, {}, function(err, project){
        if(err){
            throw err;
        }
        res.json(project);
    });

});


// Setting port
app.listen(3000);
console.log('Application is running at http://localhost:3000');