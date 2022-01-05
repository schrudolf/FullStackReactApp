import dotenv from "dotenv";
dotenv.config();

export = {
    mysql: {
        createDatabaseTables: false, // it will delete all tables and recreate. You need to create a database before  (set it to false after installed)
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
    },
    email: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            password: process.env.EMAIL_PASSWORD,
        }
    }
};