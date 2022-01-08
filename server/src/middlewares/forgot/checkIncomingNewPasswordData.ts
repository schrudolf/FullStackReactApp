import { Request, Response, NextFunction } from 'express';
import messages from '../../settings/messages';
import settings from '../../settings/settings';

// check {password, password2} from client. If valid data go next middleware
export default function checkIncomingNewPasswordData() {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { password, password2 } = req.body;

            if (typeof password === "undefined" || typeof password2 === "undefined") {
                return res.status(204).end();
            }
            if (password === "" || password2 === "") {
                return res.status(204).end();
            }
            if (!password || !password2) {
                return res.status(204).end()
            }
            if (password !== password2) {
                return res.status(200).send({ success: false, msg: messages.register.noMatch })
            }
            if (password.length < settings.app.register.minPasswordLength) {
                return res.status(200).send({ success: false, msg: messages.register.tooShort })
            }
            if (password.length > settings.app.register.maxPasswordLength) {
                return res.status(200).send({ success: false, msg: messages.register.tooLong })
            }
            else {
                res.locals.newPassword = {
                    password,
                    password2
                }
                next()
            }
        }
        catch (err) {
            next(err);
        }
    }
}