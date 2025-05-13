import fs from 'fs';
import path from 'path';

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

fs.readdir(fileSource, (err, filenames) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    filenames.forEach((filename, index) => {
        const pathSourceFile = path.join(fileSource, filename);
        const pathDestinationFile = path.join(
            destination,
            `${index + 1}. ${filename}`
        );
        const readFileStream = fs.createReadStream(pathSourceFile);
        const writeFileStream = fs.createWriteStream(pathDestinationFile);
        readFileStream.pipe(writeFileStream);
        console.log(`file coppyed ${filename}`);
    });
});
