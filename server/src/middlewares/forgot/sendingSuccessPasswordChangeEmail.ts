import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';
import nodemailer from "nodemailer";
import SMTPTransport from 'nodemailer/lib/smtp-transport';

// sending an email after password change success.
export default function sendingSuccessPasswordChangeEmail() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = res.locals.newPassword
            const transporter = nodemailer.createTransport({
                host: settings.email.host,
                port: settings.email.port,
                secure: settings.email.secure,
                auth: {
                    user: settings.email.auth.user,
                    pass: settings.email.auth.password
                }
            } as SMTPTransport.MailOptions);
            let mailOptions = {
                from: settings.email.auth.user,
                to: email,
                subject: 'Success password change',
                html: `<h1>Success password change on the ${settings.app.name} website</h1>` + `<p>with the next email: ${email} </p>` +
                    `<p>Login page: ${settings.client.information}/login </p>`
            };
            transporter.sendMail(mailOptions, function (err, info) {
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