const express = require('express');
const {
    getCommentsHandler,
    postCommentsHandler,
    getCommentIdHandler,
} = require('../controls/comments');
const router = express.Router();

router.get('/', getCommentsHandler);
router.post('/', postCommentsHandler);
router.get('/:commentId', getCommentIdHandler);

module.exports = router;
