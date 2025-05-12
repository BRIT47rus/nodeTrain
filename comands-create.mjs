import fs from 'fs';
import path from 'path';
if (!process.argv[2] || !process.argv[3]) {
    console.log('need 3 args or 4');
    process.exit();
}
const fileSecond = process.argv[2];
const lineQty = process.argv[3];

if (isNaN(lineQty)) {
    console.log('Nan');
    process.exit();
}
console.log('start', performance.now());
const writeStream = fs.createWriteStream(path.join('./files', fileSecond));

for (let i = 0; i < lineQty; i++) {
    writeStream.write(`This is ${i} line\n`);
}
writeStream.end(() => console.log('write completed'));
console.log('End', performance.now());
setTimeout(() => {
    console.log('TimeOut', performance.now());
}, 0);
