import { Request, Response, NextFunction } from 'express';
import messages from '../../settings/messages';
import bcrypt from "bcryptjs";

export default function registeringUser(db: any){
    return async function(req: Request, res: Response, next: NextFunction){
        try{
            const {newUser} = res.locals;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(newUser.password, salt);
            newUser.password = await hash;
            await db.query("INSERT INTO users SET ?", newUser);

            res.status(200).send({success: true, msg: messages.register.success})
        }
        catch(err){
            next(err)
        }
    }
}