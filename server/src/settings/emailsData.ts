// Emails data
import successRegistration from "./emals/successRegistration"
import successRegistrationWithActivationLink from "./emals/successRegistrationWithActivationLink"
import forgotPasswordEmailWithToken from "./emals/forgotPasswordEmailWithToken"
import successPasswordChange from "./emals/successPasswordChange"
import successEmailChange from "./emals/successEmailChange"

export = (userEmail: any, ref_id: any) => {
    return {
        successRegistrationOptions: successRegistration(userEmail),
        successRegistrationWithActivationLink: successRegistrationWithActivationLink(userEmail, ref_id),
        forgotPasswordEmailWithTokenOptions: forgotPasswordEmailWithToken(userEmail, ref_id),
        successPasswordChangeOptions: successPasswordChange(userEmail),
        successEmailChangeOptions: successEmailChange(userEmail, ref_id),
    }
}