import { Request, Response, NextFunction } from 'express';
import messages from '../../settings/messages';
const token = require("random-web-token");

export default function createNewToken(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const user = res.locals.user_token.user;
            const getNewToken = await token.promiseGenerate("extra", 50);
            const dateNow = Date.now() + 3600000; // 3600000 = 1hour
            const createNewUserToken = {
                user_id: user.id,
                token: getNewToken,
                expire: dateNow
            }
            await db.query("INSERT INTO user_token SET ?", createNewUserToken);
            res.status(200).send({ success: true, msg: messages.forgot.emailSent})
            res.locals.user_token = {
                token: getNewToken,
            }
            next();

        }
        catch (err) {
            next(err)
        }
    }
}