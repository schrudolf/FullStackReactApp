import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcryptjs";
import messages from '../../settings/messages';
import settings from '../../settings/settings';

export default function loginHandler(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = res.locals.userLogin;
            const getUser = await db.query("SELECT * FROM users WHERE email=? LIMIT 1", [email]);
            const user = getUser[0][0];
            // if user not exists
            if (getUser[0].length === 0) {
                return res.status(200).send({
                    success: false,
                    msg: messages.login.notExists
                })
            }
            // if the password is good and not need user activation
            if (await bcrypt.compare(password, user.password) && !settings.email.needActivation) {
                req.session.isLogged = true;
                res.status(200).send({
                    success: true,
                    msg: messages.login.success
                })
                res.locals.user = user;
                next();

            }
            // if the password is good and need user activation and user is activated 
            else if (await bcrypt.compare(password, user.password) && settings.email.needActivation && user.activated) {
                req.session.isLogged = true;
                res.status(200).send({
                    success: true,
                    msg: messages.login.success
                })
                res.locals.user = user;
                next();
            }
            // if the password is good and need user activation but user account is not activated
            else if (await bcrypt.compare(password, user.password) && settings.email.needActivation && !user.activated) {
                res.status(200).send({
                    success: false,
                    msg: messages.login.notActivated
                })
            }
            // user is exist but wrong password
            else {
                res.status(200).send({
                    success: false,
                    msg: messages.login.wrongPassword,
                });
            }
        }
        catch (err) {
            next(err);
        }
    }
}