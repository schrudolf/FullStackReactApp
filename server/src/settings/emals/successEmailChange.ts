import settings from "../settings";

import emailHead from "./head";
import emailFooter from "./footer";

const successEmailChange_Email = (userEmail: any, ref_id: any) => {
  return {
    from: settings.email.auth.user,
    to: userEmail,
    subject: `Success email change <${settings.app.name}>! reactivation needed`,
    html: `
            ${emailHead}
              <body>
                <div id="wrapper">
                  <div id="banner">
                    <img
                      src="https://www.a1solutionsni.co.uk/site/wp-content/uploads/2019/02/TEST-BANNER.jpg"
                      alt=""
                    />
                  </div>
                  <div class="one-col">
                    <h1>Success email change on the ${settings.app.name} website!</h1>
                        <p>
                            with the next email: ${userEmail}
                        </p>
                        <p>Before login you need to reactivate your user with the "Activate" button</p>
                        <div class="btn_div">
                            <a href="${settings.client.information}/user/activate/${ref_id}" class="btn">Activate</a>
                        </div>
            
                    <hr />
              ${emailFooter}
            </div>
      </div>
  </body>
</html>`
  }
}

export default successEmailChange_Email;