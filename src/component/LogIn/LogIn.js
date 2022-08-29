
const LogIn = ({ handleEmail, handlePassword, email, password, handleApi}) => {
  return (   
        <div className="loginSignupTemplate">
        <div className="illustration">
          <img
            src="https://cdn.zeplin.io/assets/webapp/img/onboarding-illustration-1.png"
            alt="..."
          />
        </div>
        <div className="content">
          <h1>Great to have you here!</h1>
          <p>You can login to access your workspace.</p>
          <div className="actionButtons">
            <a
              className="figmaSSOButton"
              href="https://www.figma.com/file/ZpdGJM4gchouRipXvst3rJ/traffico-landing-page-for-figma?node-id=413%3A3"
            >
              <img
                src="https://cdn.zeplin.io/assets/webapp/img/icFigmaDefault.svg"
                alt="..."
              />
              <span className="figmaSSOButtonText">Login with Figma</span>
            </a>
            <a
              className="googleSSOButton"
              href="https://accounts.google.com/AccountChooser/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser"
            >
              <img
                src="https://banner2.cleanpng.com/20190510/yic/kisspng-computer-icons-google-chrome-scalable-vector-graph-it-services-and-computer-repairs-webapp-dev-myte-5cd644e4a675e5.7889352415575462126818.jpg"
                alt="..."
              />
              <span className="googleSSOButtonText">Login with Google</span>
            </a>
          </div>
          <hr />
          <div className="formWrapper">
            <form className="loginForm">
              <div className="">
                <input
                  className="loginFormInput"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Work email"
                  name="email"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  className="loginFormInput"
                  placeholder="Enter password"
                  name="password"
                  required
                />
              </div>
              <button
                className="loginFormButton"
                type="submit"
                onClick={handleApi}
              >
                Submit
              </button>
              <div className="loginWithSSOContainer">
                <a href="http://localhost:3003/login">Login with SSO</a>
              </div>
              {/* <div id="sharing">
                <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%3A%2F%2Fscene.zeplin.io%252Fproject%252F6308321b576df063746b7796" target="_blank" id="lishare">
                  <img src="https://scene.zeplin.io/img/icLinkedin.svg" />
                </a>
                <a href="https://www.facebook.com/v2.4/dialog/share_open_graph?action_properties=%7B%22object%22%3A%22https%3A%2F%2Fscene.zeplin.io%2Fproject%2F6308321b576df063746b7796%22%7D&action_type=og.likes&app_id=720988801282810&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2f0b18ef522458%26domain%3Dscene.zeplin.io%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fscene.zeplin.io%252Ff138a5b5b9f58c%26relation%3Dopener&display=popup&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fscene.zeplin.io%2Fproject%2F6308321b576df063746b7796&locale=en_US&next=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df90b381b612434%26domain%3Dscene.zeplin.io%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fscene.zeplin.io%252Ff138a5b5b9f58c%26relation%3Dopener%26frame%3Df11a93e8b060ff8%26result%3D%2522xxRESULTTOKENxx%2522&sdk=joey&version=v2.4" target="_blank" id="fbshare">
                  <img src="https://scene.zeplin.io/img/icFacebook.svg" />
                </a>
              </div> */}
            </form>
          </div>
          <hr/>
          <div className="footer">
              <div className="loginPageFooter">
                <a href="https://accounts.google.com/signin/v2/usernamerecovery?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser">Fogot Password?</a>
                <span className="noAccount">
                No account yet? 
                <a href="https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp"> Sign up</a>
                </span>
              </div>
          </div>
        </div>
      </div>
  );
};

export default LogIn;
