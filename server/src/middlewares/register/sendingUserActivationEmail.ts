import { Request, Response, NextFunction } from 'express';
import settings from '../../settings/settings';
import nodemailer from "nodemailer";
import SMTPTransport from 'nodemailer/lib/smtp-transport';

// send an email with user activation link.
export default function sendingUserActivationEmail() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email, ref_id } = res.locals.newUser
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
                subject: 'Success registration',
                html: `<h1>Success registration on the ${settings.app.name}</h1>` + `<p>with the next email: ${email} </p>` +
                    `<p>Before login you need to activate your user </p>` +
                    `<p>Activation link: ${settings.client.information}/user/activate/${ref_id} </p>`
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