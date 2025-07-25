const express = require('express');
const router = express.Router();
const commandController = require('../controllers/commandController');

router.post('/execute', commandController.handleCommand);

module.exports = router;
