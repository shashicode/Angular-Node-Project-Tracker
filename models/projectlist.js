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