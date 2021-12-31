import dotenv from "dotenv";
dotenv.config();

export = {
    mysql: {
        createDatabaseTables: true, // it will delete all tables and recreate. You need to create a database before  (set it to false after installed)
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
        port: process.env.PORT,
    },
    cookie: {
        name: process.env.COOKIE_NAME,
        secret: process.env.COOKIE_SECRET!
    }
};