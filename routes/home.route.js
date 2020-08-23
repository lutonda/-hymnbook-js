var express = require('express');
var router = express.Router();

var controller = require('../controllers/home.controller');

// Load User model
// Login Page
router.get('/', controller.index);

router.get('/api', controller.api);

module.exports = router;