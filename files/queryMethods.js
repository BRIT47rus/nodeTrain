const { log } = require('console');
const comments = require('./data');
const fs = require('fs');

function getHome(req, res) {
    fs.readFile('./files/content-form.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-type', 'text/plain');
            log(err);
            res.end('Cant get html');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end(data);
        }
    });
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(comments));
}

function postComment(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', '');
}

module.exports = { getComments, getHome };
