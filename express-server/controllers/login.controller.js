var crypto = require('crypto');
const { mysqlConnection } = require('../mysql');

exports.login = function(req, res) {
    hashedPassword = crypto.createHash('sha256').update(req.body.password).digest('base64');
    mysqlConnection.query(`SELECT * FROM users WHERE login='${req.body.login}' AND password='${hashedPassword}';`, (err, results) => {
        if(err) {
            res.status(500).send('Внутренняя ошибка!');
            return console.log(err);
        }

        if(results.length > 0) {
            req.session.isLoggedIn = true;
            req.session.login = req.body.login;
            req.session.save();
            console.log(`Выполнен вход. Пользователь: ${req.body.login}`)
            res.status(200).send(`Успешный вход. Вы вошли под пользователем: ${req.body.login}!`);
        }
        else {
            console.log(`Запрос на вход, но пользователь с таким логином и паролем не найден. Логин: ${req.body.login}`)
            res.status(404).send(`Такого пользователя не существует!`);
        }
    });
};

exports.logout = function(req, res) {
    req.session.isLoggedIn = false;
    console.log(`Выполнен выход. Пользователь: ${req.session.login}`)
    res.status(200).send(`Успешно выполнен выход из аккаунта: ${req.session.login}`)
}