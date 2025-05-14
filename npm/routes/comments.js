const express = require('express');
const {
    getCommentsHandler,
    getCommentsHandler,
    getCommentIdHandler,
} = require('../controls/comments');
const router = express.Router();

router.get('/comments', getCommentsHandler);
router.post('/comments', getCommentsHandler);
router.get('/comments/:commentId', getCommentIdHandler);

module.exports = router;
