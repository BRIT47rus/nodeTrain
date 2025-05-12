import stream from 'stream';
import fs from 'fs';
const text = './files/text.txt';

const writeble = fs.createWriteStream(text);
process.stdin.pipe(writeble);
