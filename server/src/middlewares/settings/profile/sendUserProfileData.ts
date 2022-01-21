import { Request, Response, NextFunction } from 'express';

export default function sendUserProfileData(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            // req.session.user?.id not exists or user not logged
            if (typeof req.session.user?.id === "undefined" || req.session.user.id === -1) {
                res.status(200).send();
            } else {
                const user_id = req.session.user.id;
                const getDetails = await db.query("SELECT email,ip_address FROM users WHERE id = ?;", [user_id]);
                const user_details = getDetails[0][0];
                res.status(200).send(user_details);
            }
        }
        catch (err) {
            next(err)
        }
    }
}