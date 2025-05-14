const express = require('express');
const { firstResponse, secondResponse } = require('../controls/root');
const router = express.Router();
router.get('/', firstResponse, secondResponse);
module.exports = router;
