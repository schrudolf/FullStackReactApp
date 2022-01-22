import { Request, Response, NextFunction } from 'express';
import messages from '../../../settings/messages';

export default function saveNewUserProfileData(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const user_id = req.session.user.id
            const { email } = res.locals.userProfile;
            await db.query("UPDATE users SET email = ?, activated = ? WHERE id = ?", [email, 0, user_id]);
            // update session user email with new
            req.session.user.email = email;
            res.status(200).send({ msg: messages.userProfile.success, success: true });
            next();
        }
        catch (err) {
            next(err)
        }
    }
}