var route = require('express').Router();
var controller = require('../controllers/typePart.controller');

route.get('/', controller.findAllBy);
route.get('/:id', controller.findOneBy);
route.post('/new', controller.createOne);
route.post('/update/:id', controller.updateOne);
route.delete('/:id', controller.deleteOne);

module.exports = route;