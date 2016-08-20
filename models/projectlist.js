var mongoose = require('mongoose');

// Project Schema
var projectSchema = mongoose.Schema(

    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        status: {
            type: String,
            required: true
        },

        amount: {
            type: String,
            required: true
        },

        payment: {
            type: String,
            required: true
        },

        clientname: {
            type: String,
            required: true
        }
    }
);

var Project = module.exports = mongoose.model('Project', projectSchema);

module.exports.getProjects = function (callback, limit) {

    Project.find(callback).limit(limit);

}

// Add projects
module.exports.addProject = function (project, callback) {

    Project.create(project, callback);

}

// Remove project
module.exports.removeProject = function (id, callback) {
    var query = {_id: id};
    Project.remove(query, callback);
}

// Update project
module.exports.updateProject = function (id, project, options, callback) {
    var query = {_id: id};
    var update = {
        name: project.name,
        description: project.description,
        status: project.status,
        amount: project.amount,
        payment: project.payment,
        clientname: project.clientname
    }
    Project.findOneAndUpdate(query, update, options, callback);
}