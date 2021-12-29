import settings from "../settings/settings";
import createDatabase from "../database/createDatabase";

// get the client
import mysql from 'mysql2/promise';

interface ConnectionInfo {
    host: string,
    user: string,
    password: string,
    database: string,
    connectionLimit: number | 10,
    waitForConnections: boolean | true,
    queueLimit: number
}

const mysqlConnection: ConnectionInfo = {
    host: settings.mysql.host,
    user: settings.mysql.user,
    password: settings.mysql.password,
    database: settings.mysql.database,
    connectionLimit: settings.mysql.connectionLimit,
    waitForConnections: settings.mysql.waitForConnections,
    queueLimit: settings.mysql.queueLimit
}

export = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await mysql.createPool(mysqlConnection);
            console.log("Connected to database")
            // if true, create database
            if (settings.mysql.createDatabaseTables && await createDatabase(db)) {
                resolve(db);
            // else already created Mysql Ready
            } else {
                resolve(db);
            }
        }
        catch (err) {
            console.log(err)
        }
    })
};