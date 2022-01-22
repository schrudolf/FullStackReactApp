import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';
import emailsData from '../../settings/emailsData';

// sending an email with this generated token.
export default function sendEmailWithToken() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email, token } = res.locals.user_token
            const { forgotPasswordEmailWithTokenOptions } = emailsData(email, token)
            settings.email.transporter.sendMail(forgotPasswordEmailWithTokenOptions, function (err, info) {
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