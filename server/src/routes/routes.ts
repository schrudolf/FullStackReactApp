import { IRouter } from "express";

                                /* Middlewares start */
 // Check Session
import userSession from "../middlewares/session/userSession"; 
// User register
import checkIncomingRegisterData from "../middlewares/register/checkIncomingRegisterData";
import registeringUser from "../middlewares/register/registeringUser";
// User Login
import checkIncomingLoginData from "../middlewares/login/checkIncomingLoginData";
// User Logout
import logout from "../middlewares/logout/logout";
// User Forgot password
import checkIncomingForgotData from "../middlewares/forgot/checkIncomingForgotData";
import createNewToken from "../middlewares/forgot/createNewToken";
import sendEmailWithToken from "../middlewares/forgot/sendEmailWithToken";

                                /* Middlewares end */

export = (app: IRouter, db: any) => { 


    app.get("/session", userSession()) // every client page load get session
    app.get("/app/logout", logout()) // logout from the app
    
    app.post("/register", checkIncomingRegisterData(db), registeringUser(db))  // user register
    app.post("/login", checkIncomingLoginData(db)) // user Login
    app.post("/forgot", checkIncomingForgotData(db), createNewToken(db), sendEmailWithToken()) // forgot pw


    //  ***** plan routes ********
    app.get("/app/user/profile") // user profile

    app.get("/forgot/:tokenid") // check forgot token is exists
    app.post("/forgot/:tokenid/newpassword") // create a new password

    // extra plan routes
    app.get("/ref/:refid") // check valid user ref link
    app.get("/app/user/ref") // get all user ref

    app.post("/ref/:refid") // registering with a user ref link
    app.post("/app/user/ref/new") // invite friend 
    app.post("/app/user/ref/getreward") // reward if invited friend registered
    app.post("/app/user/newpassword") // change password within the app
}