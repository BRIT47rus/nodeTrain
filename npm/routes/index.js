const express = require('express');

const commentRoute = require('./comments');
const usersRoute = require('./users');
const rootRoute = require('./root');
const router = express.Router();

router.use('/users', usersRoute);
router.use('/comments', commentRoute);
router.use('/', rootRoute);
module.exports = router;
