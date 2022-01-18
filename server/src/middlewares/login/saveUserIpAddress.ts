import { Request, Response, NextFunction } from 'express';

// save user IP address after success login
export default function saveUserIpAddress(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { user } = res.locals;
            const actualIpAddress = req.ip;
            await db.query("UPDATE users SET ip_address = INET_ATON(?) WHERE id = ?;", [actualIpAddress, user.id]);
            // if you want get IP from users
            // await db.query("SELECT INET_NTOA(ip_address) as ip FROM users WHERE id = ?;", [user.id]);
            res.end();
        }
        catch (err) {
            next(err);
        }
    }
}