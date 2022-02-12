import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcryptjs";
import messages from '../../settings/messages';

// update new user password if current password match
export default function updateUserNewPassword(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { currentPassword, newPassword } = res.locals.newUserPassword;
            const userEmail = req.session.user.email;
            const userDBPassword = await db.query("SELECT password FROM users WHERE email=? LIMIT 1", [userEmail]);
            if (await bcrypt.compareSync(currentPassword, userDBPassword[0][0].password)) {
                const createNewPw = await bcrypt.hashSync(newPassword, 10);
                await db.query("UPDATE users SET password=? WHERE email=?", [createNewPw, userEmail]);
                res.status(200).send({
                    success: true,
                    msg: messages.userPassword.successPasswordChange,
                })
            } else {
                res.status(200).send({
                    success: false,
                    msg: messages.userPassword.currentPasswordWrong,
                })
            }
        }
        catch (err) {
            next(err);
        }
    }
}

