import fs from 'fs';

const fileName = './files/copy-text.txt';
const readStream = fs.createReadStream('./files/first.tx');
const writeStream = fs.createWriteStream(fileName);

readStream.pipe(writeStream);

readStream.on('end', () => {
    console.log('Read stream');
});
writeStream.on('close', () => {
    console.log('Closed copy stream');
});
writeStream.on('finish', () => {
    console.log('Finished copy');
});
