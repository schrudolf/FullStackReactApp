import { Request, Response, NextFunction } from 'express';

// if incoming user prfole data empty or not exists return else go next middleware
export default function checkIncomingUserProfileData(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            if ( typeof email === "undefined" || typeof password === "undefined") {
                return res.status(204).send();
            }
            if ( email === "" || password === "") {
                return res.status(204).send();
            }
            if (typeof req.session.user?.id === "undefined" || req.session.user.id === -1) {
                return res.status(204).send();
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