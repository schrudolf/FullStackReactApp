import settings from "./settings"
import successRegistration from "./emals/successRegistration"

export = (userEmail: any, ref_id: any) => {
    return {
        successRegistrationOptions: successRegistration(userEmail),
        successRegistrationWithActivationOptions: {
            from: settings.email.auth.user,
            to: userEmail,
            subject: 'Success registration',
            html: `<h1>Success registration on the ${settings.app.name}</h1>` + `<p>with the next email: ${userEmail} </p>` +
                `<p>Before login you need to activate your user </p>` +
                `<p>Activation link: ${settings.client.information}/user/activate/${ref_id} </p>`
        },
        forgotPasswordEmailWithTokenOptions: {
            from: settings.email.auth.user,
            to: userEmail,
            subject: 'Password Change',
            html: '<h1>New password</h1>' + `<p>for the next email: ${userEmail} </p>` +
                "<p>using this link for new password: </p>" + '<span>' + settings.client.information + "/forgot/" + ref_id +
                "</span><p>This link is working for the next one hour</p>"
        },
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