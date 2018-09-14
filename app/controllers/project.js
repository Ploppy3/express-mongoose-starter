const Controller = require('../controller');
const Project = require('../models/project');

class ControllerProject extends Controller {

  get() {
    Project.find({ _id: this.req.params.id }).then(project => {
      if (project !== null) {
        this.res.json(project);
      } else {
        this.res.status(404).json({ message: 'not found' });
      }
    }, err => {
      this.res.status(500).json(err);
    });
  }
}

module.exports = ControllerProject;