import settings from "../settings";

import emailHead from "./head";
import emailFooter from "./footer";

const successPasswordChange_Email = (userEmail: any) => {
    return {
        from: settings.email.auth.user,
        to: userEmail,
        subject: `Success password change <${settings.app.name}>`,
        html: `
              ${emailHead}
              <body>
                <div id="wrapper">
                  <div id="banner">
                    <img
                      src=${settings.email.emailBannerUrl}
                      alt="banner img"
                    />
                  </div>
                  <div class="one-col">
                    <h1>Success password change on the ${settings.app.name} website</h1>

                    <p>
                        with the next email: ${userEmail}
                    </p>
            
                    <div class="btn_div">
                        <a href="${settings.client.information}/login" class="btn">Login</a>
                    </div>
            
                    <hr />
            
                    ${emailFooter}
                  </div>
                </div>
              </body>
            </html>`
    }
}

export default successPasswordChange_Email;