const getCommentsHandler = (req, res) => {
    res.send('<a href="/"> Нажми comments</a>');
};
const postCommentsHandler = (req, res) => {
    res.send('Post comment');
};
const getCommentIdHandler = (req, res) => {
    res.send(`coment is ${req.params.commentId}`);
};
module.exports = {
    getCommentsHandler,
    postCommentsHandler,
    getCommentIdHandler,
};
