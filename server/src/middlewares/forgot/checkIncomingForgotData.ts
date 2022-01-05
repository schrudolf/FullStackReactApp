import { Request, Response, NextFunction } from 'express';
import messages from '../../settings/messages';

// check that the email exists  
export default function checkIncomingForgotData(db: any) {
    return async function(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.body.email;
            if(typeof email === "undefined" || !email || email === ""){
                return res.status(204).end() 
            }
            const user = await db.query("SELECT * FROM users WHERE email=? LIMIT 1", [email]);
            if(user[0].length === 0){
                return res.status(200).send({ success: false, msg: messages.forgot.notExists })
            }
            else{
                res.locals.user_token = {
                    user: user[0],
                    email
                }
                next();
            }
        }
        catch (err) {
            next(err);
        }
    }
}