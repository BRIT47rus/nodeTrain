const express = require('express');
const { firstResponse, secondResponse } = require('../controls/root');
const commentRoute = require('./comments');
const usersRoute = require('./users');
const router = express.Router();

router.get('/', firstResponse, secondResponse);
router.use('/users', usersRoute);
router.use('/comments', commentRoute);
module.exports = router;
