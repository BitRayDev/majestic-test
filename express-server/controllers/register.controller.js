var crypto = require('crypto');
const { mysqlConnection } = require('../mysql');

exports.register = function(req, res) {
    mysqlConnection.query(`SELECT * FROM users WHERE login='${req.body.login}';`, (err, results) => {
        if(err) {
            res.status(500).send('Внутренняя ошибка!');
            return console.log(err);
        }

        if(results.length > 0) {
            return res.status(400).send('Пользователь с таким логином уже зарегистрирован!');
        }

        hashedPassword = crypto.createHash('sha256').update(req.body.password).digest('base64');
        mysqlConnection.query(`INSERT INTO users (login, password) VALUES ('${req.body.login}', '${hashedPassword}')`, (err) => {
            if(err) {
                res.status(500).send('Не удалось зарегестрировать пользователя в базе!');
                return console.log(err); 
            }
            console.log(`Новый пользователь: ${req.body.login}`)
            return res.status(200).send('Успешно зарегистрирован!');
        });
    });
};