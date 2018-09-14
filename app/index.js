const express = require('express');
const mongoose = require('mongoose');
// ------------------------------------------------------------
const Router = require('./router');
// ------------------------------------------------------------
const ControllerProjects = require('./controllers/projects');
const ControllerProject = require('./controllers/project');
// ------------------------------------------------------------
const app = express();
// ------------------------------------------------------------
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Successfully connected to MongoDb');
});
// ------------------------------------------------------------
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ------------------------------------------------------------
const router = new Router(app, upload);
router.listen('/projects', new ControllerProjects());
router.listen('/projects/:id', new ControllerProject());
// ------------------------------------------------------------
app.all('*', function (req, res) {
  res.status(404).json('not found');
});
// ------------------------------------------------------------
app.listen(3000, () => console.log('Example app listening on port 3000!'));