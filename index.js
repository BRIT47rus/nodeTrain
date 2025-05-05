const { log } = require('console');
const http = require('http');
const PORT = 5000;

const { getComments, getHome } = require('./files/queryMethods');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res);
    }

    // if (req.method === 'GET' && req.url === '/http') {
    //     res.statusCode = 200;
    //     res.setHeader('Content-type', 'text/html');
    //     res.write('<html><body>');
    //     res.write('<h1 style="color:red">Hello world</h1>');
    //     res.write('</body></html>');
    //     return res.end();
    // }

    if (req.url == '/text') {
        res.statusCode === 200;
        res.setHeader('Content-type', 'text/plain');
        return res.end('перешли на страницу /text');
    }
    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res);
    }
    if (req.method === 'post' && req.url === '/comments') {
        return postComment(req, res);
    }
});

server.listen(PORT, () => {
    log('server started', PORT);
});
