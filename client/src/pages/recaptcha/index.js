import React from "react";
import { useNavigate } from "react-router-dom";
import { ReCaptchaProvider, ReCaptchaV2 } from "react-recaptcha-x";
import "./styles.css";

const Recaptcha = () => {
  const navigate = useNavigate();
  const publicKey = "6Leq3r4UAAAAAMkk_R0hCXWGAqXY7SNuE13KEe00";

  const callback = (token, refreshFunc) => {
    console.error(token, refreshFunc);
    if (typeof token === "string") {
      console.error(token);
      localStorage.setItem("recaptcha", token);
      // setTimeout(() => refreshFunc(), 3000);
      navigate("/login")
    }
  };

  const getReCaptcha = (publicKey, callback) => {
    return (
      <ReCaptchaProvider siteKeyV2={publicKey}>
        {/* <ReCaptchaV3 action="resultsPage" callback={callback} /> */}
        <ReCaptchaV2
          callback={callback}
          id="my-id"
          data-test-id="my-test-id"
          tabindex={0}
        />
      </ReCaptchaProvider>
    );
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div className="recapcha">
        <div className="title mb-1">
          Delta.com
        </div>
        <div className="text">
          Checking if the site connection is secure
        </div>
        {getReCaptcha(publicKey, callback)}
        <div className="text mt-3">
          upwork.com needs to review the security of your connection before proceeding.
        </div>
      </div>
    </div>
  )
}

export default Recaptcha