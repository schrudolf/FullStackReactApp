import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';
import emailsData from '../../settings/emailsData';

// sending an email after password change success.
export default function sendingSuccessPasswordChangeEmail() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = res.locals.newPassword
            const { forgotPasswordEmailWithTokenOptions } = emailsData(email, "");
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