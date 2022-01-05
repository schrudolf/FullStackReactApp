import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';
import nodemailer from "nodemailer";
import SMTPTransport from 'nodemailer/lib/smtp-transport';

// sending an email with this generated token.
export default function sendEmailWithToken() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email, token } = res.locals.user_token
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
                subject: 'Password Change',
                html: '<h1>New password</h1>' + `<p>for the next email: ${email} </p>` +
                    "<p>using this link for new password: </p>" + '<span>http://' + settings.app.host + "/forgot/" + token +
                    "</span><p>This link is working for the next one hour</p>"
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