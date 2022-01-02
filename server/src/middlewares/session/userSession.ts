import { Request, Response, NextFunction } from 'express';

export default function userSession() {
    return function (req: Request, res: Response, next: NextFunction){
        interface UserSession {
            isLogged: boolean,
        }
        const sessionData: UserSession = {
            isLogged: false,
        }
        const user = {
            sessionData
        }
        res.status(200).send(user);
    }
}