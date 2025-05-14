const express = require('express');
const app = express();

const firstResponse = (req, res, next) => {
    console.log('first get');
    next();
};
const secondResponse = (req, res) => {
    res.send('<h1>Main page from express<a href="/comments">coment</a></h1>');
};

app.get('/', firstResponse, secondResponse);

app.listen(5000, () => console.log('server started'));
