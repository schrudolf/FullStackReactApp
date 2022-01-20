import { Request, Response, NextFunction } from 'express';

export default function sendUserDetailsData(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            if (req.session.user.id === -1) {
                res.status(200).send()
            } else {
                const user_id = req.session.user.id;
                const getDetails = await db.query("SELECT * FROM user_details WHERE user_id = ?;", [user_id]);
                const user_details = getDetails[0][0];
                res.status(200).send(user_details);
            }
        }
        catch (err) {
            next(err)
        }
    }
}