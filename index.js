const { log } = require('console');
const http = require('http');
const PORT = 5000;

const {
    getComments,
    getHome,
    postComment,
    handleNotFound,
} = require('./files/queryMethods');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res);
    }

    if (req.url == '/text') {
        res.statusCode === 200;
        res.setHeader('Content-type', 'text/plain');
        return res.end('перешли на страницу /text');
    }
    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res);
    }
    if (req.method === 'POST' && req.url === '/comments') {
        return postComment(req, res);
    }

    handleNotFound(req, res);
});

server.listen(PORT, () => {
    log('server started', PORT);
});
