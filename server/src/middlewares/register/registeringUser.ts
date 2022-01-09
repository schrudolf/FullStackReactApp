import { Request, Response, NextFunction } from 'express';
import messages from '../../settings/messages';
import bcrypt from "bcryptjs";
import settings from '../../settings/settings';

// if everything is fine in previous middleware then insert a new user
export default function registeringUser(db: any){
    return async function(req: Request, res: Response, next: NextFunction){
        try{
            const {newUser} = res.locals;
            const salt = await bcrypt.genSalt(settings.app.register.salt);
            const hash = await bcrypt.hash(newUser.password, salt);
            newUser.password = await hash;
            await db.query("INSERT INTO users SET ?", newUser);
            if(settings.email.successRegistration){
                res.status(200).send({success: true, msg: messages.register.success})
                next();
            }else {
                res.status(200).send({success: true, msg: messages.register.success})
            }
        }
        catch(err){
            next(err)
        }
    }
}