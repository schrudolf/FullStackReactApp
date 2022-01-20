import { Request, Response, NextFunction } from 'express';
import messages from '../../../settings/messages';

export default function saveNewUserDetails(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const user_id = req.session.user.id;
            const newUserDetails = res.locals.userDetails;
            await db.query("UPDATE user_details SET ? WHERE user_id = ?;", [newUserDetails, user_id]);
            res.status(200).send({msg: messages.userDetails.success, success: true});
        }
        catch (err) {
            next(err)
        }
    }
}