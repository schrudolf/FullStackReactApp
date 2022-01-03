import { IRouter } from "express";

                                /* Middlewares start */
 // Check Session
import userSession from "../middlewares/session/userSession"; 
// User register
import checkIncomingRegisterData from "../middlewares/register/checkIncomingRegisterData";
import registeringUser from "../middlewares/register/registeringUser";
// User Login

                                /* Middlewares end */

export = (app: IRouter, db: any) => { 
    app.get("/session", userSession())
    
    app.post("/register", checkIncomingRegisterData(db), registeringUser(db))  // user register


    //  ***** plan routes ********
    app.get("/app/logout") // logout from the app
    app.get("/app/user/profile") // user profile

    app.post("/login") // user Login
    app.post("/forgot") // forgot pw
    app.post("/forgot/:tokenid") // check forgot token is exists
    app.post("/forgot/:tokenid/newpassword") // create a new password

    // extra plan routes
    app.get("/ref/:refid") // check valid user ref link
    app.get("/app/user/ref") // get all user ref

    app.post("/ref/:refid") // registering with a user ref link
    app.post("/app/user/ref/new") // invite friend 
    app.post("/app/user/ref/getreward") // reward if invited friend registered
    app.post("/app/user/newpassword") // change password within the app
}