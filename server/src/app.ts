import express from "express";
import db from "./database/mysqlConnect";
import routes from "./routes/routes";
import settings from "./settings/settings";
import session from "express-session";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const HOST: string = settings.app.host || "localhost";
const PORT: string = settings.app.port || "5000";

async function startServer() {
    app.use(cors({ origin: 'http://localhost', credentials: true, methods: ["GET", "POST"] }));
    // app.set('trust proxy', 1) // trust first proxy
    app.use(session({
        name: settings.cookie.name,
        secret: settings.cookie.secret,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }))
    const con = await db();
    routes(app, con);
    app.use(function (err: any, req: any, res: any, next: any) {
        console.error(err.stack)
        res.status(500).send('Something broke!')
    })
    app.listen(parseInt(PORT), HOST, () => {
        console.log(`Server is listening on http://${HOST}:${PORT}`);
    });
}

startServer()