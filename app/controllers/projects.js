const Controller = require('../controller');
const Project = require('../models/project');

class ControllerProjects extends Controller {

  get() {
    Project.find().then(projects => {
      if (projects !== null) {
        this.res.json(projects);
      } else {
        this.res.status(404).json();
      }
    }, err => {
      this.res.status(500).json(err);
    });
  }

  post() {
    if (this.validateBodyFormData(['name'], Project.schema)) {
      const project = new Project({ name: this.req.body.name });
      project.save().then(() => {
        this.res.json(project);
      }).catch(this.next);
    }
  }

  delete() {
    Project.collection.drop();
    this.res.json('success');
  }
}

module.exports = ControllerProjects;