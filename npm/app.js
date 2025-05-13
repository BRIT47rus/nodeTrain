const express = require('express');
const app = express();

const firstResponse = (req, res, next) => {
    console.log('first get');
    next();
};
const secondResponse = (req, res) => {
    res.send('<h1>Main page from express<a href="/comments">coment</a></h1>');
};
const getCommentsHandler = (req, res) => {
    res.send('<a href="/"> Нажми</a>');
};
const getCommentIdHandler = (req, res) => {
    console.log(req.params);
    res.send(`coment is ${req.params.commentId}`);
};
app.get('/', firstResponse, secondResponse);
app.get('/comments', getCommentsHandler);
app.get('/comments/:commentId', getCommentIdHandler);
app.listen(5000, () => console.log('started'));
