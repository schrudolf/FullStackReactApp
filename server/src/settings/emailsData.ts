// Emails data
import successRegistration_Email from "./emals/successRegistration"
import successRegistrationWithActivation_Email from "./emals/successRegistrationWithActivationLink"
import forgotPassword_Email from "./emals/forgotPasswordEmailWithToken"
import successPasswordChange_Email from "./emals/successPasswordChange"
import successEmailChange_Email from "./emals/successEmailChange"

export = (userEmail: any, ref_id: any) => {
    return {
        successRegistrationWithoutActivationLink: successRegistration_Email(userEmail),
        successRegistrationWithActivationLink: successRegistrationWithActivation_Email(userEmail, ref_id),
        forgotPassword: forgotPassword_Email(userEmail, ref_id),
        successPasswordChange: successPasswordChange_Email(userEmail),
        successEmailChange: successEmailChange_Email(userEmail, ref_id),
    }
}