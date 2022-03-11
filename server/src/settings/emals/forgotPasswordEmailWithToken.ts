import settings from "../settings";

import emailHead from "./head";
import emailFooter from "./footer";

const forgotPassword_Email = (userEmail: any, ref_id: any) => {
    return {
        from: settings.email.auth.user,
        to: userEmail,
        subject: `Forgot password <${settings.app.name}>`,
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
                    <h1>Password change!</h1>
                        <p>
                            for the next email: ${userEmail}
                        </p>
                        <p>This link is working for the next one hour</p>
                        <div class="btn_div">
                            <a href="${settings.client.information}/forgot/${ref_id}" class="btn">Password change</a>
                        </div>
            
                    <hr />
            ${emailFooter}
                  </div>
                </div>
              </body>
            </html>`
    }
}

export default forgotPassword_Email;