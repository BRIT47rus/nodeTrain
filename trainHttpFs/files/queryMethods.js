const comments = require('./data');
const fs = require('fs');
const qs = require('querystring');

function getHome(req, res) {
    fs.readFile('./files/content-form.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-type', 'text/plain');

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
    res.setHeader('Content-type', 'text/plain');
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        req.on('data', (chunks) => {
            body += chunks.toString();
        });

        req.on('end', () => {
            const commen = qs.parse(body);
            console.log(commen);
        });
    } else if (req.headers['content-type'] === 'application/json') {
        res.statusCode = 200;
        let commentJSON = '';
        req.on('data', (chunk) => (commentJSON += chunk));
        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON));
                res.end('Comments was resive');
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid Json');
            }
        });
    } else {
        res.statusCode = 400;
        res.end('not  Json or Form');
    }
}
function handleNotFound(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('page not found');
}

module.exports = { getComments, getHome, postComment, handleNotFound };
