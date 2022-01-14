import { Request, Response, NextFunction } from 'express';

// check {email, password} from client. If valid data call next
export default function checkIncomingRegisterData() {
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
            }else {
                res.locals.userLogin = {
                    email,
                    password
                };
                next();
            }  
        }
        catch (err) {
            next(err);
        }
    }
}