var route = require('express').Router();
var controller = require('../controllers/author.controller');

route.get('/', controller.findAllBy);
route.get('/:id', controller.findOneBy);

module.exports = route;