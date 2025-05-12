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

const reverseStream = new Transform({
    transform: (chunk, encoding, cb) => {
        const array = chunk.toString().split('');
        const lastChar = array.pop();
        const reversed = array.reverse().concat(lastChar).join('');
        cb(null, reversed);
    },
});

process.stdin.pipe(upper).pipe(reverseStream).pipe(process.stdout);
