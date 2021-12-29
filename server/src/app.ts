import express from "express";
import db from "./database/mysqlConnect";
import routes from "./routes/routes";
import settings from "./settings/settings";

const app = express();

app.use(express.json());

const HOST: string = settings.app.host || "localhost";
const PORT: string = settings.app.port || "5000";

async function startServer() {
    const con = await db();
    routes(app, con);
    app.listen(parseInt(PORT), HOST, () => {
        console.log(`Server is listening on http://${HOST}:${PORT}`);
    });
}

startServer()