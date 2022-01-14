import { Request, Response, NextFunction } from 'express';
import messages from '../../settings/messages';
import settings from '../../settings/settings';
const token = require("random-web-token");

// check {email, password, password2} from client. If valid data go next middleware
export default function checkIncomingRegisterData(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
        const { email, password, password2 } = req.body;

        if (typeof email === "undefined" || typeof password === "undefined" || typeof password2 === "undefined") {
            return res.status(204).end();
        }
        if (email === "" || password === "" || password2 === "") {
            return res.status(204).end();
        }
        if (!email || !password || !password2) {
            return res.status(204).end()
        }
        if (password !== password2) {
            return res.status(200).send({success: false, msg: messages.register.noMatch })
        }
        if (password.length < settings.app.register.minPasswordLength) {
            return res.status(200).send({success: false, msg: messages.register.tooShort })
        }
        if (password.length > settings.app.register.maxPasswordLength) {
            return res.status(200).send({success: false, msg: messages.register.tooLong })
        }
            const checkEmail = await db.query("SELECT * FROM users WHERE email=?", [email]);
            //generate ref id for activation email
            const ref_id = await await token.promiseGenerate(settings.email.tokenType, settings.email.tokenLength)
            // return if the email already exists
            if(checkEmail[0].length > 0){
                return res.status(200).send({success: false, msg: messages.register.emailExists })
            }else{
                res.locals.newUser = {
                    email,
                    password,
                    ref_id,
                    activated: settings.email.needActivation ? 0 : 1
                }
                next()
            }
        }
        catch (err) {
            next(err);
        }
    }
}