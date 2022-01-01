import { Request, Response, NextFunction } from 'express';

export default function checkIncomingRegisterData(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        const { email, password, password2 } = req.body;

        if (typeof email === "undefined" || typeof password === "undefined" || typeof password2 === "undefined") {
            return res.status(204).end();
        }
        if (email === "" || password === "" || password2 === "") {
            return res.status(204).end();
        }
        if (!email || !password || !password2) {
            return res.status(204).end()
        }
        if (password !== password2) {
            return res.status(200).send({ msg: "Passwords do not match" })
        }
        if (password.length < 5) {
            return res.status(200).send({ msg: "Password is too short" })
        }
        if (password.length > 15) {
            return res.status(200).send({ msg: "Password is too long" })
        }
        try {
            const checkEmail = await db.query("SELECT * FROM users WHERE email=?", [email]);
            if(checkEmail[0].length > 0){
                return res.status(200).send({ msg: "This email already exists" })
            }else{
                res.locals.newUser = {
                    email,
                    password
                }
                next()
            }
        }
        catch (err) {
            next(err);
        }
    }
}