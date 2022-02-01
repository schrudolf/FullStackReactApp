import { IRouter } from "express";

                                /* Middlewares start */
 // Check Session
import userSession from "../middlewares/session/userSession"; 
// User register
import checkIncomingRegisterData from "../middlewares/register/checkIncomingRegisterData";
import registeringUser from "../middlewares/register/registeringUser";
import sendingSuccessRegistrationEmail from "../middlewares/register/sendingSuccessRegistrationEmail";
import sendingUserActivationEmail from "../middlewares/register/sendingUserActivationEmail";
// User Login
import checkIncomingLoginData from "../middlewares/login/checkIncomingLoginData";
import loginHandler from "../middlewares/login/loginHandler";
import userDetailsHandler from "../middlewares/login/userDetailsHandler";
import saveUserIpAddress from "../middlewares/login/saveUserIpAddress";
// User Logout
import logout from "../middlewares/logout/logout";
// User Forgot password
import checkIncomingForgotData from "../middlewares/forgot/checkIncomingForgotData";
import checkOldForgotToken from "../middlewares/forgot/checkOldForgotToken";
import deletingOldUserToken from "../middlewares/forgot/deletingOldUserToken";
import createNewToken from "../middlewares/forgot/createNewToken";
import sendEmailWithToken from "../middlewares/forgot/sendEmailWithToken";
import checkIncomingNewPasswordData from "../middlewares/forgot/checkIncomingNewPasswordData";
import saveNewPassword from "../middlewares/forgot/saveNewPassword";
import sendingSuccessPasswordChangeEmail from "../middlewares/forgot/sendingSuccessPasswordChangeEmail";
// User Forgot Url Token check
import tokenUrlCheck from "../middlewares/forgot/tokenUrlCheck";
// User activation handler
import checkActivationLink from "../middlewares/activate/checkActivationLink";
import activationHandler from "../middlewares/activate/activationHandler";
// Details Settings
import sendUserDetailsData from "../middlewares/settings/details/sendUserDetailsData";
import checkIncomingUserDetailsData from "../middlewares/settings/details/checkIncomingUserDetailsData";
import saveNewUserDetails from "../middlewares/settings/details/saveNewUserDetails";
// Profile Settings
import sendUserProfileData from "../middlewares/settings/profile/sendUserProfileData";
import checkIncomingUserProfileData from "../middlewares/settings/profile/checkIncomingUserProfileData";
import saveNewUserProfileData from "../middlewares/settings/profile/saveNewUserProfileData";
import sendNewActivationEmailAfterSuccessChange from "../middlewares/settings/profile/sendNewActivationEmailAfterSuccessChange";
// Error handler
import errorHandler from "../middlewares/error/errorHandler";
                                /* Middlewares end */

export = (app: IRouter, db: any) => { 


    app.get("/session", userSession()) // every client page load get session
    app.get("/app/logout", logout()) // logout from the app
    app.get("/forgot/:tokenid", tokenUrlCheck(db)) // verifies that the token url is valid
    app.get("/user/activate/:ref_id", checkActivationLink(), activationHandler(db)) // handling user activation
    app.get("/app/settings/profile", sendUserProfileData(db)) // user profile settings
    app.get("/app/settings/details", sendUserDetailsData(db)) // user details settings
    
    app.post("/register", checkIncomingRegisterData(db), registeringUser(db), sendingSuccessRegistrationEmail(), sendingUserActivationEmail())  // user register
    app.post("/login", checkIncomingLoginData(), loginHandler(db), userDetailsHandler(db), saveUserIpAddress(db)) // user Login
    app.post("/forgot", checkIncomingForgotData(db), checkOldForgotToken(db), deletingOldUserToken(db),  createNewToken(db), sendEmailWithToken()) // forgot pw
    app.post("/forgot/:tokenid/newpassword", checkIncomingNewPasswordData(), saveNewPassword(db), sendingSuccessPasswordChangeEmail()) // save new password
    app.post("/app/settings/details", checkIncomingUserDetailsData(db), saveNewUserDetails(db)) // save new user details
    app.post("/app/settings/profile", checkIncomingUserProfileData(db), saveNewUserProfileData(db), sendNewActivationEmailAfterSuccessChange()) // save new user Email
    app.post("/app/settings/password") // change password within the app

    app.use(errorHandler())  // Error handler
}