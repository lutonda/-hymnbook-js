var router = require('express').Router();
var controller = require('../controllers/file.controller')


router.get('/:id', controller.getOne);

// Export API routes
module.exports = router;