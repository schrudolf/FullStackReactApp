import { Request, Response, NextFunction } from 'express';
import emailsData from '../../../settings/emailsData';
import settings from '../../../settings/settings';

// send an email with activaiton link after email change success.
export default function sendNewActivationEmailAfterSuccessChange() {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            const { email, ref_id } = req.session.user;
            const { successEmailChangeOptions } = emailsData(email, ref_id);
            settings.email.transporter.sendMail(successEmailChangeOptions, function (err, info) {
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