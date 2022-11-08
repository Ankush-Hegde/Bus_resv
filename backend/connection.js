const mysql = require('mysql2/promise');

export var connection = null;


export const initConnection = async () => {

    connection = await mysql.createConnection({
        host: 'sql6.freemysqlhosting.net',
        user: 'sql6528423',
        database: 'sql6528423',
        password: 'qHWiM9l7qa'
    });
}

