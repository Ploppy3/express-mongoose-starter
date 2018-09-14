const Controller = require('./controller');

class Router {

  constructor(app, upload) {
    this.app = app;
    this.upload = upload;
  }

  listen(/**@type {string}*/ path, /**@type {Controller}*/ controller) {

    this.app.all(path, this.upload.array(), function (req, res, next) {

      controller._setReq(req);
      controller._setRes(res);
      controller._setNext(next);

      switch (req.method) {
        case 'GET':
          controller.get();
          break;
        case 'POST':
          controller.post();
          break;
        case 'PUT':
          controller.put();
          break;
        case 'DELETE':
          controller.delete();
          break;

        default:
          break;
      }
    });

  }
}

module.exports = Router;