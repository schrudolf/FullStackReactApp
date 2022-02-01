import { Request, Response, NextFunction } from 'express';

export default function errorHandler() {
    return async function (err: any, req: Request, res: Response, next: NextFunction) {
        try {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        }
        catch (err) {
            next(err);
        }
    }
}