var route = require('express').Router();
var controller = require('../controllers/user.controller');

route.get('/', controller.getAll);
route.get('/:id', controller.getOneBy);
route.post('/new', controller.create);

module.exports = route;