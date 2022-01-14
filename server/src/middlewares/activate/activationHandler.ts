import { Request, Response, NextFunction } from 'express';
import messages from '../../settings/messages';

// check the activation link is valid  
export default function activationHandler(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const ref_id = res.locals.ref_id;
            const getUser = await db.query("SELECT activated FROM users WHERE ref_id = ? LIMIT 1;", [ref_id]);
            const user = getUser[0][0];
            // if the user not exists or user exists but activated
            if (getUser[0].length === 0 || getUser[0].length > 0 && user.activated) {
                return res.status(200).send({
                    success: false,
                    msg: messages.activation.wrongLinkOrActivated
                });
            }
            // activate user
            else {
                await db.query("UPDATE users SET activated = ? WHERE ref_id = ?;", [1, ref_id]);
                return res.status(200).send({
                    success: true,
                    msg: messages.activation.successActivation
                });
            }
        }
        catch (err) {
            next(err);
        }
    }
}