import { Request, Response, NextFunction } from 'express';

export default function checkIncomingRegisterData(db: any){
    return function(req: Request, res: Response, next: NextFunction){
        const {email, password, password2} = req.body;

        if(typeof email === "undefined" || typeof password === "undefined" || typeof password2 === "undefined"){
            return res.status(204).end(); 
        }
        if(email === "" || password === "" || password2 === ""){
            return res.status(204).end();
        }
        if(!email || !password || !password2){
            return res.status(204).end()
        }
        if(password !== password2){
            return res.status(200).send({msg: "Passwords do not match"})
        }
        if(password.length < 5){
            return res.status(200).send({msg: "Password is too short"})
        }
        if(password.length > 15){
            return res.status(200).send({msg: "Password is too long"})
        }
        res.locals.newUser = {
            email,
            password,
            password2
        }
        next()
    }
}