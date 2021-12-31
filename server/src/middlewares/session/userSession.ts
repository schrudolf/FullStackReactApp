import { Request, Response, NextFunction } from 'express';

export default function userSession() {
    return function (req: Request, res: Response, next: NextFunction){
        res.status(200).send();
    }
}