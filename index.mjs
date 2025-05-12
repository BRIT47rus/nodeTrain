import { Transform } from 'stream';
import fs from 'fs';
// const text = './files/text.txt';

// const writeble = fs.createWriteStream(text);
// process.stdin.pipe(writeble);

const upper = new Transform({
    transform: (chunk, encoding, cb) => {
        const upperCase = chunk.toString().toUpperCase();
        cb(null, upperCase);
    },
});
process.stdin.pipe(upper).pipe(process.stdout);
