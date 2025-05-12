import fs from 'fs';

const fileSource = './files';
const destination = './copy-files';

if (!fs.existsSync(fileSource)) {
    console.log('Folder not exist ');
    process.exit(0);
}
if (fs.existsSync(destination)) {
    fs.rmdirSync(destination);
    console.log('copy folder remowed');
}

fs.mkdirSync(destination);
console.log('new folder');
