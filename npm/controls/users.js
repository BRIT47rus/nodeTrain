//users
const getUsersHandler = (req, res) => {
    res.send('<a href="/"> Нажми users</a>');
};
const postUserHandler = (req, res) => {
    res.send('Post user');
};
const getSingleUserIdHandler = (req, res) => {
    res.send(`coment is ${req.params.userID}`);
};
module.exports = {
    getUsersHandler,
    postUserHandler,
    getSingleUserIdHandler,
};
