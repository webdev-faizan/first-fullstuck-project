import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

import React, { useEffect } from "react";

const Googlelogin = () => {
  const Success = (resp) => {
    console.log(resp);
    console.log(resp.accessToken);
  };
  const Failure = (error) => {
    console.error(error);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "57664316633-j7i7juosi15m24dgj01d2bipo5loplhr.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div>
      <GoogleLogin
        clientId=""
        onSuccess={Success}
        onFailure={Failure}
        isSingup={true}
      ></GoogleLogin>
    </div>
  );
};

export default Googlelogin;
