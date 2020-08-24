var route = require('express').Router();
var controller = require('../controllers/author.controller');

route.get('/', controller.findAllBy);
route.get('/:id', controller.findOneBy);
route.post('/new', controller.createOne)
route.post('/update', controller.upadateOne)

module.exports = route;