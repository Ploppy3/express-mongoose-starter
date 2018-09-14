const Schema = require('mongoose').Schema;

class Controller {

  constructor() {
  }

  validateBodyFormData(/**@type {string[]}*/ keys, /**@type {Schema}*/ schema) {
    const missingKeys = [];
    keys.forEach(key => {
      if (!(key in this.req.body)) {
        missingKeys.push(key);
      }
    });
    if (missingKeys.length > 0) {
      this.res.status(400).json('missing body params [' + missingKeys.join(', ') + ']');
      return false;
    }
    return true;
  }

  validateQueryParams(/**@type {string[]}*/ keys) {
    const missingKeys = [];
    keys.forEach(key => {
      if (!(key in this.req.query)) {
        missingKeys.push(key);
      }
    });
    if (missingKeys.length > 0) {
      this.res.status(400).json('missing body params [' + missingKeys.join(', ') + ']');
      return false;
    }
    return true;
  }

  get() {
    this.next();
  }

  post() {
    this.next();
  }

  put() {
    this.next();
  }

  delete() {
    this.next();
  }

  _setRes(/**@type {Response}*/ res) {
    this.res = res;
  }

  _setReq(/**@type {Request}*/ req) {
    this.req = req;
  }

  _setNext(next) {
    this.next = next;
  }

  _isReqBodyUndefined() {
    if (this.req.body === undefined) {
      this.res.status(400).json('bad request');
      return true;
    }
    return false;
  }

}

module.exports = Controller;