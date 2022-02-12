import { Request, Response, NextFunction } from 'express';
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
            res.locals.newUserPassword = {
                currentPassword,
                newPassword
            }
            next();
        }
        catch (err) {
            next(err);
        }
    }
}