import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';

// sending an email after password change success.
export default function sendingSuccessPasswordChangeEmail() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = res.locals.newPassword
            let mailOptions = {
                from: settings.email.auth.user,
                to: email,
                subject: 'Success password change',
                html: `<h1>Success password change on the ${settings.app.name} website</h1>` + `<p>with the next email: ${email} </p>` +
                    `<p>Login page: ${settings.client.information}/login </p>`
            };
            settings.email.transporter.sendMail(mailOptions, function (err, info) {
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