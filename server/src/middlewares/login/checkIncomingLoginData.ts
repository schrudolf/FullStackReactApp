import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcryptjs";
import messages from '../../settings/messages';

// check {email, password} from client. If valid data login the user
export default function checkIncomingRegisterData(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;

            if (typeof email === "undefined" || typeof password === "undefined") {
                return res.status(204).end();
            }
            if (email === "" || password === "") {
                return res.status(204).end();
            }
            if (!email || !password) {
                return res.status(204).end()
            }
            const getEmails = await db.query("SELECT * FROM users WHERE email=? LIMIT 1", [email]);
            if (getEmails[0].length === 0) {
                return res.status(200).send({
                    success: false,
                    msg: messages.login.notExists
                })
            }
            if (await bcrypt.compare(password, getEmails[0][0].password)) {
                req.session.isLogged = true;
                res.status(200).send({
                    success: true,
                    msg: messages.login.success
                })
            } else {
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