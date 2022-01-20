import { Request, Response, NextFunction } from 'express';

export default function logout() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            // if user logged in destroy the session
            if (req.session.user.isLogged) {
                req.session.destroy(() => {
                    return res.status(200).send()
                });
            } else {
                res.status(200).send()
            }
        }
        catch (err) {
            next(err)
        }
    }
}