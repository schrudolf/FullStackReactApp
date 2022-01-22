import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';
import emailsData from '../../settings/emailsData';

// send an email with user activation link.
export default function sendingUserActivationEmail() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email, ref_id } = res.locals.newUser
            const { successRegistrationWithActivationOptions } = emailsData(email, ref_id);
            settings.email.transporter.sendMail(successRegistrationWithActivationOptions, function (err, info) {
                if (err) {
                    next(err);
                } res.end();
            });
        }
        catch (err) {
            next(err)
        }
    }
}