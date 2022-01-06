import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';
import validator from "validator";

// check token from the url (not exists or expired) if valid token return with 200 status code
export default function tokenUrlCheck(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const token_id = req.params.tokenid;
            const actualDate = Date.now();
            if (typeof token_id === "undefined" || token_id === "" || !token_id) {
                return res.status(204).end()
            }
            if (token_id.length > settings.email.tokenLength || token_id.length < settings.email.tokenLength || !validator.isAlphanumeric(token_id, "hu-HU")) {
                return res.status(204).end()
            }
            const user_token = await db.query('SELECT * FROM user_token WHERE token = ? LIMIT 1;', [token_id]);
            if (user_token[0].length === 0) {
                return res.status(204).end()
            }
            if (user_token[0][0].expire < actualDate) {
                await db.query('DELETE FROM user_token WHERE token = ?', user_token[0][0].token);
                return res.status(204).end()
            }
            res.status(200).end()
        }
        catch (err) {
            next(err);
        }
    }
}