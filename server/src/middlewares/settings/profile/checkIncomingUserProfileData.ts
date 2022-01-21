import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcryptjs";
import messages from '../../../settings/messages';

// if incoming user prfole data empty or not exists return else go next middleware
export default function checkIncomingUserProfileData(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            if (typeof email === "undefined" || typeof password === "undefined") {
                return res.status(204).send();
            }
            if (email === "" || password === "") {
                return res.status(204).send();
            }
            if (typeof req.session.user?.id === "undefined" || req.session.user.id === -1) {
                return res.status(204).send();
            }
            const user_id = req.session.user.id;
            const checkEmails = await db.query("SELECT email FROM users WHERE email=?", [email]);
            const getUserPassword = await db.query("SELECT password FROM users WHERE id=?", [user_id]);
            // return if the email already exists
            if (checkEmails[0].length > 0) {
                return res.status(200).send({ success: false, msg: messages.register.emailExists })
            }
            // wrong current password
            if(!await bcrypt.compare(password, getUserPassword[0][0].password)){
                res.status(200).send({
                    success: false,
                    msg: messages.login.wrongPassword,
                });
            }
            else {
                res.locals.userProfile = {
                    email,
                    password
                }
                next()
            }
        }
        catch (err) {
            next(err)
        }
    }
}