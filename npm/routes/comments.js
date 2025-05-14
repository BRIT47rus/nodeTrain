const express = require('express');
const router = express.Router();

router.get('/comments', getCommentsHandler);
router.post('/comments', getCommentsHandler);
router.get('/comments/:commentId', getCommentIdHandler);

module.exports = router;
