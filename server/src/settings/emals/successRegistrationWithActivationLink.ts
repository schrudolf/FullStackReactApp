import settings from "../settings";

const successRegistrationWithActivationLink = (userEmail: any, ref_id: any) => {
    return {
        from: settings.email.auth.user,
        to: userEmail,
        subject: `Success registration <${settings.app.name}>`,
        html: `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <style>
                  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
            
                  * {
                    margin: 0;
                    padding: 0;
                    border: 0;
                  }
            
                  body {
                    font-family: "Raleway", sans-serif;
                    color: black !important;
                    background-color: #d8dada;
                    font-size: 19px;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 3%;
                  }
            
                  img {
                    max-width: 100%;
                  }
            
                  header {
                    width: 98%;
                  }
            
                  #logo {
                    max-width: 120px;
                    margin: 3% 0 3% 3%;
                    float: left;
                  }
                  #banner img {
                    max-height: 300px;
                    width: 100%;
                  }
                  #wrapper {
                    background-color: #f0f6fb;
                  }
            
                  #social {
                    float: right;
                    margin: 3% 2% 4% 3%;
                    list-style-type: none;
                  }
            
                  #social > li {
                    display: inline;
                  }
            
                  #social > li > a > img {
                    max-width: 35px;
                  }
            
                  h1,
                  p {
                    margin: 3%;
                  }
                  .btn_div {
                      width: 100%;
                      padding: 1rem;
                      text-align: center;
                  }
                  .btn {
                    background-color: #303840;
                    min-width: 200px !important;
                    color: white !important;
                    text-decoration: none;
                    font-weight: 800;
                    padding: 8px 12px;
                    border-radius: 8px;
                    letter-spacing: 2px;
                  }
            
                  hr {
                    height: 1px;
                    background-color: #303840;
                    clear: both;
                    width: 96%;
                    margin: auto;
                  }
            
                  #contact {
                    text-align: center;
                    padding-bottom: 3%;
                    line-height: 16px;
                    font-size: 12px;
                    color: #303840;
                  }
                </style>
              </head>
              <body>
                <div id="wrapper">
                  <header>
                    <div id="logo">
                       Top left logo 
                      <img
                        src=""
                        alt=""
                      />
                    </div>
                    <div>
                      <ul id="social">
                        <li>
                          <a href="#" target="_blank"
                            ><img
                              src="https://mdbgo.io/dawidadach/responsiveemail/img/fb-color.png"
                              alt=""
                          /></a>
                        </li>
                        <li>
                          <a href="#" target="_blank"
                            ><img
                              src="https://mdbgo.io/dawidadach/responsiveemail/img/in-color.png"
                              alt=""
                          /></a>
                        </li>
                        <li>
                          <a href="#" target="_blank"
                            ><img
                              src="https://mdbgo.io/dawidadach/responsiveemail/img/tw-color.png"
                              alt=""
                          /></a>
                        </li>
                        <li>
                          <a href="#" target="_blank"
                            ><img
                              src="https://mdbgo.io/dawidadach/responsiveemail/img/yt-color.png"
                              alt=""
                          /></a>
                        </li>
                      </ul>
                    </div>
                  </header>
                  <div id="banner">
                    <img
                      src="https://www.a1solutionsni.co.uk/site/wp-content/uploads/2019/02/TEST-BANNER.jpg"
                      alt=""
                    />
                  </div>
                  <div class="one-col">
                    <h1>Success registration! Welcome to the ${settings.app.name} website!</h1>
                        <p>
                            with the next email: ${userEmail}
                        </p>
                        <p>Before login you need to activate your user with the activate button</p>
                        <div class="btn_div">
                            <a href="${settings.client.information}/user/activate/${ref_id}" class="btn">Activate</a>
                        </div>
            
                    <hr />
            
                    <footer>
                      <p id="contact">
                        FullStackReactApp <br />
                      </p>
                    </footer>
                  </div>
                </div>
              </body>
            </html>`
    }
}

export default successRegistrationWithActivationLink;