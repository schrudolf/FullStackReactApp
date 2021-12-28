import env from "dotenv";
env.config();

// get the client
import mysql from 'mysql2/promise';

interface ConnectionInfo {
    host: string | undefined,
    user: string | undefined,
    password: string | undefined,
    database: string | undefined,
    connectionLimit: number | 10,
    waitForConnections: boolean | true,
    namedPlaceholders: boolean | true

}

const mysqlConnection: ConnectionInfo = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10,
    waitForConnections: true,
    namedPlaceholders: false
}

export = (function () {
    return mysql.createPool(mysqlConnection);
})();