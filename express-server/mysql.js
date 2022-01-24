var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'host',
    user: 'user',
    password: 'pwrd',
    database: 'Test_MajesticApi'
});

connection.connect({}, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`MySQL успешно подключен!`);
});

module.exports = {
    mysqlConnection: connection
}
