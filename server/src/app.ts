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
    try {
        const [dbReady, con] = await db();
        // check database connection
        if (dbReady) {
            app.use(cors({ origin: 'http://localhost', credentials: true, methods: ["GET", "POST"] }));
            // app.set('trust proxy', 1) // trust first proxy
            app.use(session({
                name: settings.cookie.name,
                secret: settings.cookie.secret,
                resave: false,
                saveUninitialized: true,
                cookie: { secure: false }
            }))
            routes(app, con);
            app.listen(parseInt(PORT), HOST, () => {
                console.log(`Server is listening on http://${HOST}:${PORT}`);
            });
        } else {
            console.log("Mysql connection failed")
        }
    } catch (err) {
        console.log(err)
    }
}

startServer()