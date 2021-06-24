const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ido239738416',
    database: 'soldiers_db'
});

module.exports = db.promise();