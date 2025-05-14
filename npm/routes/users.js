const express = require('express');
const {
    getSingleUserIdHandler,
    getUsersHandler,
    postUserHandler,
} = require('../controls/users');
const router = express.Router();

router.get('/', getUsersHandler);
router.post('/', postUserHandler);
router.get('/:userID', getSingleUserIdHandler);

module.exports = router;
