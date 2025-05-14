const express = require('express');
const {
    getSingleUserIdHandler,
    getUsersHandler,
    postUserHandler,
} = require('../controls/users');
const router = express.Router();

router.get('/users', getUsersHandler);
router.post('/users', postUserHandler);
router.get('/users/:userID', getSingleUserIdHandler);

module.exports = router;
