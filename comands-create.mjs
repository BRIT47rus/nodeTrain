if (!process.argv[2] || !process.argv[3]) {
    console.log('need 3 args or 4');
    process.exit();
}
const fileSecond = process.argv[2];

const fileThird = parseInt(process.argv[3]);
if (isNaN(fileThird)) {
    console.log('Nan');
    process.exit();
}
console.log(fileThird);
