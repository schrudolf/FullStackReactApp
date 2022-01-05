import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';
import messages from '../../settings/messages';
const token = require("random-web-token");

// create a new token into the user_token table
export default function createNewToken(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const {user, email} = res.locals.user_token;
            const getNewToken = await token.promiseGenerate(settings.email.tokenType, settings.email.tokenLength);
            const dateNow = Date.now() + settings.email.tokenExpireTime;
            const createNewUserToken = {
                user_id: user.id,
                token: getNewToken,
                expire: dateNow
            }
            await db.query("INSERT INTO user_token SET ?", createNewUserToken);
            res.status(200).send({ success: true, msg: messages.forgot.emailSent})
            res.locals.user_token = {
                token: getNewToken,
                email 
            }
            next();

        }
        catch (err) {
            next(err)
        }
    }
}