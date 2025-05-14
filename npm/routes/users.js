const express = require('express');
const router = express.Router();

router.get('/users', getUsersHandler);
router.post('/users', postUserHandler);
router.get('/users/:userID', getSingleUserIdHandler);

module.exports = router;
