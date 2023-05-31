const mysql = require('mysql2/promise');

export var connection = null;


export const initConnection = async () => {

    connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,//'127.0.0.1',
        port: process.env.MYSQL_PORT,//'3306'
        user: process.env.MYSQL_USER,//'root',
        database: process.env.MYSQL_DATABASE,//'booking',
        password: process.env.MYSQL_PASSWORD,//'',
    });
}
