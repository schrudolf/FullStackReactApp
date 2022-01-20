import { Request, Response, NextFunction } from 'express';

// if incoming user details data empty or not exists return else go next middleware
export default function checkIncomingUserDetailsData(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { first_name, last_name, country, city, zip_code, address } = req.body;
            if (typeof first_name === "undefined" || typeof last_name === "undefined" || typeof country === "undefined" || typeof city === "undefined" || typeof zip_code === "undefined" || typeof address === "undefined") {
                return res.status(204).send();
            }
            if (first_name === "" || last_name === "" || country === "" || city === "" || zip_code === "" || address === "") {
                return res.status(204).send();
            }
            if (typeof req.session.user?.id === "undefined" || req.session.user.id === -1) {
                return res.status(204).send();
            }
            else {
                res.locals.userDetails = {
                    first_name, last_name, country, city, zip_code, address
                }
                next()
            }
        }
        catch (err) {
            next(err)
        }
    }
}