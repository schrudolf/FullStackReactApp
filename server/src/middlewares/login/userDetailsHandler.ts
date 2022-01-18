import { Request, Response, NextFunction } from 'express';

// if actual user does not have data in user_details create it (all first login)
export default function userDetailsHandler(db: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            const { user } = res.locals;
            const getUserDetails = await db.query("SELECT user_id FROM user_details WHERE user_id = ?;", [user.id]);
            if(getUserDetails[0].length === 0){
                interface NewUserDetails {
                    user_id: number,
                    country: string,
                    city: string,
                    zip_code: number,
                    address: string,
                    first_name: string,
                    last_name: string,
                }
                const userDetails: NewUserDetails = {
                    user_id: user.id,
                    country: "",
                    city: "",
                    zip_code: 0,
                    address: "",
                    first_name: "",
                    last_name: "",
                }
                await db.query("INSERT INTO user_details set ?;", [userDetails]);
                next();
            }
            else{
                next();
            }
        }
        catch (err) {
            next(err);
        }
    }
}