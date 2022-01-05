import { Request, Response, NextFunction } from 'express';

// if exists old token from this user delete it before create new
export default function deletingOldUserToken(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { user, oldToken } = res.locals.user_token;
            if (oldToken) {
                await db.query("DELETE FROM user_token WHERE user_id = ?;", [user.id])
                next()
            } else {
                next()
            }
        }
        catch (err) {
            next(err);
        }
    }
}