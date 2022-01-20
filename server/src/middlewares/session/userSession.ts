import { Request, Response, NextFunction } from 'express';

interface User {
    id: number,
    email: string,
    isLogged: boolean,
}

declare module 'express-session' {
    export interface Session {
        user: User
    }
}

// every page load on the client side. It will sending session/data
// if userSession object is not exists create it before sent
export default function userSession() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            req.session.user = {
                id: typeof req.session.user?.id === "undefined" ? -1 : req.session.user?.id,
                email: typeof req.session.user?.email === "undefined" ? "" : req.session.user?.email,
                isLogged: typeof req.session.user?.isLogged === "undefined" ? false : req.session.user?.isLogged,
            }
            res.status(200).send(req.session.user);
        }
        catch (err) {
            next(err)
        }
    }
}