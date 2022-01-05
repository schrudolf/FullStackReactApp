import { Request, Response, NextFunction } from 'express';

// check old forgot token from this user
export default function checkOldForgotToken(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { user } = res.locals.user_token;
            const userToken = await db.query("SELECT * FROM user_token WHERE user_id = ?;", [user.id])
            if (userToken[0].length === 0) {
                res.locals.user_token.oldToken = false;
                next();
            } else {
                res.locals.user_token.oldToken = true;
                next();
            }
        }
        catch (err) {
            next(err);
        }
    }
}