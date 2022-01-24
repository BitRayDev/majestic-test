var crypto = require('crypto');
const { mysqlConnection } = require('../mysql');

exports.getPosts = function(req, res) {
    if(!req.session.isLoggedIn)
        return res.status(401).send('Требуется авторизация!');

    mysqlConnection.query(`SELECT * FROM posts;`, (err, results) => {
        if(err) {
            res.status(500).send('Внутренняя ошибка!');
            return console.log(err);
        }

        if(results.length > 0) {
            console.log(`Запрос на получение всех постов. Пользователь: ${req.session.login}`);
            res.status(200).json(results);
        } 
    });
};

exports.addPost = function(req, res) {
    if(!req.session.isLoggedIn)
        return res.status(401).send('Требуется авторизация!');

    mysqlConnection.query(`INSERT INTO posts (author_login, text) VALUES ('${req.session.login}', '${req.body.text}');`, (err, results) => {
        if(err) {
            res.status(500).send('Внутренняя ошибка!');
            return console.log(err);
        }
        else {
            console.log(`Добавлен новый пост пользователем: ${req.session.login}`)
            res.status(200).send('Новый пост успешно добавлен!');
        }
    });
}