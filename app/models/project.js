const mongoose = require('mongoose');

let schema_project = new mongoose.Schema({
  name: String
});

const Project = mongoose.model('Project', schema_project);

module.exports = Project;