import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcryptjs";
import messages from '../../settings/messages';
import settings from '../../settings/settings';


// check {currentPassword, newPassword, newPassword2} from client. If valid data go next middleware
export default function checkIncomingUserNewPasswordata(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { currentPassword, newPassword, newPassword2 } = req.body;
            if (typeof currentPassword === "undefined" || typeof newPassword === "undefined" || typeof newPassword2 === "undefined") {
                return res.status(204).end();
            }
            if (currentPassword === "" || newPassword === "" || newPassword2 === "") {
                return res.status(204).end();
            }
            if (!currentPassword || !newPassword || !newPassword2) {
                return res.status(204).end()
            }
            if (newPassword !== newPassword2) {
                return res.status(200).send({ success: false, msg: messages.userPassword.newPasswordDoNotMatch })
            }
            if (newPassword.length < settings.app.register.minPasswordLength) {
                return res.status(200).send({ success: false, msg: messages.userPassword.newPasswordIsTooShort })
            }
            if (newPassword.length > settings.app.register.maxPasswordLength) {
                return res.status(200).send({ success: false, msg: messages.userPassword.newPasswordIstooLong })
            }
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