import settings from "../settings/settings";
import createDatabase from "../database/createDatabase";
import env from "dotenv";
env.config();

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
    host: process.env.MYSQL_HOST!,
    user: process.env.MYSQL_USER!,
    password: process.env.MYSQL_PASSWORD!,
    database: process.env.MYSQL_DATABASE!,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
}

export = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await mysql.createPool(mysqlConnection);
            console.log("Connected to database")
            // if true, create database
            if (settings.mysql.createDatabase && await createDatabase(db)) {
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