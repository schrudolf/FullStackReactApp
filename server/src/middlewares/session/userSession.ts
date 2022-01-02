import { Request, Response, NextFunction } from 'express';

declare module 'express-session' {
    export interface SessionData {
        isLogged: boolean;
    }
}

interface UserSession {
    user: {
        isLogged: boolean
    }
}

// every page load on the client side. It will sending session/data
// if userSession object is not exists create it before sent
export default function userSession() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            const userSession: UserSession = {
                user: {
                    isLogged: typeof req.session.isLogged === "undefined" ? false : req.session.isLogged
                }
            }
            res.status(200).send(userSession);
        }
        catch (err) {
            next(err)
        }
    }
}