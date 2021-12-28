import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(express.json());

const HOST: string = process.env.HOST || "localhost";
const PORT: string = process.env.PORT || "5000";

async function startServer(){
    app.listen(parseInt(PORT), HOST, () => {
        console.log(`Server is listening on http://${HOST}:${PORT}`);
    });
}

startServer()