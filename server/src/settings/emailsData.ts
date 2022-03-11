import settings from "./settings"
import successRegistration from "./emals/successRegistration"
import successRegistrationWithActivationLink from "./emals/successRegistrationWithActivationLink"
import forgotPasswordEmailWithToken from "./emals/forgotPasswordEmailWithToken"

export = (userEmail: any, ref_id: any) => {
    return {
        successRegistrationOptions: successRegistration(userEmail),
        successRegistrationWithActivationLink: successRegistrationWithActivationLink(userEmail, ref_id),
        forgotPasswordEmailWithTokenOptions: forgotPasswordEmailWithToken(userEmail, ref_id),
        successPasswordChangeOptions: {
            from: settings.email.auth.user,
            to: userEmail,
            subject: 'Success password change',
            html: `<h1>Success password change on the ${settings.app.name} website</h1>` + `<p>with the next email: ${userEmail} </p>` +
                `<p>Login page: ${settings.client.information}/login </p>`
        },
        successEmailChangeOptions: {
            from: settings.email.auth.user,
            to: userEmail,
            subject: 'Success email change! Activation required',
            html: `<h1>Success email change on the ${settings.app.name} website</h1>` + `<p>with the next email: ${userEmail} </p>` +
                `<p>Before login you need to activate your user </p>` +
                `<p>Activation link: ${settings.client.information}/user/activate/${ref_id} </p>`
        },
    }
}