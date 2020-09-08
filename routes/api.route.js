var router = require('express').Router();
var controller = require('../controllers/api.controller')
var controller = require('../controllers/api.controller')

router.get('sources', controller.getAllSources);

// Export API routes
module.exports = router;