import { Request, Response, NextFunction } from 'express';
import messages from '../../settings/messages';

// check {email, password, password2} from client. If valid data go next middleware
export default function checkIncomingRegisterData(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
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
        if (password.length < 5) {
            return res.status(200).send({success: false, msg: messages.register.tooShort })
        }
        if (password.length > 15) {
            return res.status(200).send({success: false, msg: messages.register.tooLong })
        }
        try {
            const checkEmail = await db.query("SELECT * FROM users WHERE email=?", [email]);
            // return if the email already exists
            if(checkEmail[0].length > 0){
                return res.status(200).send({success: false, msg: messages.register.emailExists })
            }else{
                res.locals.newUser = {
                    email,
                    password
                }
                next()
            }
        }
        catch (err) {
            next(err);
        }
    }
}