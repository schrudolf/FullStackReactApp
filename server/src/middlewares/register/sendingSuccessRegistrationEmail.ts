import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';
import emailsData from '../../settings/emailsData';

// send an email after registration success.
export default function sendingSuccessRegistrationEmail() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            if (settings.email.needActivation) {
                next();
            } else {
                const { email, ref_id } = res.locals.newUser
                const { successRegistrationOptions } = emailsData(email, ref_id);
                settings.email.transporter.sendMail(successRegistrationOptions, function (err, info) {
                    if (err) {
                        next(err);
                    } res.end();
                });
            }
        }
        catch (err) {
            next(err)
        }
    }
}