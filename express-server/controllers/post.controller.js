var crypto = require('crypto');
const { mysqlConnection } = require('../mysql');

exports.getPost = function(req, res) {
    if(!req.session.isLoggedIn)
        return res.status(401).send('Требуется авторизация!');

    mysqlConnection.query(`SELECT * FROM posts WHERE id='${req.params.id}';`, (err, results) => {
        if(err) {
            res.status(500).send('Внутренняя ошибка!');
            return console.log(err);
        }

        if(results.length > 0) {
            console.log(`Запрос на получение поста под ID ${req.params.id}. Пользователь: ${req.session.login}`)
            res.status(200).json(results[0]);
        } else {
            console.log(`Запрос на получение поста, но пост с таким ID не найден. ID: ${req.body.login}`)
            res.status(404).send(`Такого поста не существует!`);
        }
    });
};

exports.deletePost = function(req, res) {
    if(!req.session.isLoggedIn)
        return res.status(401).send('Требуется авторизация!');

    mysqlConnection.query(`DELETE FROM posts WHERE id='${req.params.id}';`, (err, results) => {
        if(err) {
            res.status(500).send('Внутренняя ошибка!');
            return console.log(err);
        }
        console.log(`Удален пост под ID ${req.params.id} пользователем: ${req.session.login}`)
        res.status(200).send('Пост успешно удален!');
    });
}