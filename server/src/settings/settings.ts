import dotenv from "dotenv";
dotenv.config();

export = {
    mysql: {
        createDatabase: true,
        host: process.env.MYSQL_HOST!,
        user: process.env.MYSQL_USER!,
        password: process.env.MYSQL_PASSWORD!,
        database: process.env.MYSQL_DATABASE!,
        connectionLimit: 10,
        waitForConnections: true,
        queueLimit: 0
    },
    app: {
        host: process.env.HOST,
        port: process.env.PORT
    }
};