import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';
import validator from "validator";

// check the activation link is valid  
export default function checkActivationLink() {
    return async function(req: Request, res: Response, next: NextFunction) {
        try {
            const ref_id = req.params.ref_id;
            if (typeof ref_id === "undefined" || ref_id === "" || !ref_id) {
                return res.status(204).end()
            }
            if (ref_id.length > settings.email.tokenLength || ref_id.length < settings.email.tokenLength || !validator.isAlphanumeric(ref_id, "hu-HU")) {
                return res.status(204).end()
            }else {
                res.locals.ref_id = ref_id;
                next()
            }
        }
        catch (err) {
            next(err);
        }
    }
}