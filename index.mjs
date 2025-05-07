import http from 'http';
import fs from 'fs';
import { log } from 'console';
const PORT = 5000;

const server = http.createServer((req, res) => {
    const file = './streams/files/http-stream.html';
    if (req.url === '/' && req.method === 'GET') {
        const readStream = fs.createReadStream(file);
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        readStream.pipe(res);
    }
    if (req.url === '/no-stream' && req.method === 'GET') {
        fs.readFile('./streams/files/http-nostream.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                log(err);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-type', 'text/html');
                res.end(data);
            }
        });
    }
});
server.listen(PORT, () => {
    log('server starten on ', PORT);
});
