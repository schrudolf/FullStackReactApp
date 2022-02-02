import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from "fs/promises";

export default function errorHandler() {
    return async function (err: Error, req: Request, res: Response, next: NextFunction) {
        try {
            const dir = path.join(__dirname, "../../logs")
            await fs.mkdir(dir, { recursive: true });
            const date = new Date().toLocaleString();
            await fs.appendFile(dir + "/error.log", `\r\n \r\n>>>> ${err.name}: ${date} <<<<<< \r\n \r\n ${err.message} \r\n ${err.stack} `)
            console.log("An ERROR -->> saved to src/logs/error.log file")
            res.status(500).send("Something Broken")
            next();
        }
        catch (err) {
            next(err);
        }
    }
}