const firstResponse = (req, res, next) => {
    console.log('first get');
    next();
};
const secondResponse = (req, res) => {
    res.send('<h1>Main page from express<a href="/comments">coment</a></h1>');
};
module.exports = {
    firstResponse,
    secondResponse,
};
