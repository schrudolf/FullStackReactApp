import { Request, Response, NextFunction } from 'express';

export default function checkIncomingRegisterData(db: any){
    return function(req: Request, res: Response, next: NextFunction){
        console.log(req.body);
        res.status(200).send("Success registration")
    }
}