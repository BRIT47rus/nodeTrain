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
    res.send('<a href="/"> Нажми comments</a>');
};
const postCommentsHandler = (req, res) => {
    res.send('Post comment');
};
const getCommentIdHandler = (req, res) => {
    res.send(`coment is ${req.params.commentId}`);
};

//users
const getUsersHandler = (req, res) => {
    res.send('<a href="/"> Нажми users</a>');
};
const postUserHandler = (req, res) => {
    res.send('Post user');
};
const getSingleUserIdHandler = (req, res) => {
    res.send(`coment is ${req.params.userID}`);
};

app.get('/', firstResponse, secondResponse);

app.listen(5000, () => console.log('server started'));
