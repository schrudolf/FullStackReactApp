import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcryptjs";
import messages from '../../settings/messages';
import settings from '../../settings/settings';

// save new password and deleting used token
export default function saveNewPassword(db: any) {
    return async function(req: Request, res: Response, next: NextFunction) {
        try {
            const {password, token_id} = res.locals.newPassword;
            const user_token = await db.query("SELECT user_id FROM user_token WHERE token = ? LIMIT 1", [token_id]);
            const user_id = user_token[0][0].user_id;
            const salt = await bcrypt.genSalt(settings.app.register.salt);
            const hash = await bcrypt.hash(password, salt);
            const newPassword = await hash;
            // save new password
            await db.query("UPDATE users SET password = ? WHERE id = ?", [newPassword, user_id]);
            // deleting used token
            await db.query("DELETE FROM user_token WHERE token = ?", [token_id]);
            const userData = await db.query("SELECT email FROM users WHERE id = ?;", [user_id]);
            const userEmail = userData[0][0].email;
            res.locals.newPassword.email = userEmail;
            if(settings.email.successPasswordChange){
                res.status(200).send({
                    success: true,
                    msg: messages.newPassword.successPasswordChange,
                })
                next();
            }else {
                res.status(200).send({
                    success: true,
                    msg: messages.newPassword.successPasswordChange,
                })
            }
        }
        catch (err) {
            next(err);
        }
    }
}