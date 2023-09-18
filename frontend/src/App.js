import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import "./App.css";
import "./Stylesheet/auth.css";
import AuthRoutes from "./Routes/AuthRoutes";
import IndexRoutes from "./Routes/IndexRoutes";
import { useNavigate, useLocation } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";

const App = () => {
  const [AuthenticateRoute, setAuthenticateRoute] = useState(false);
  const redirectHome = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const cookie = new Cookies();
    let verifed = cookie.get("jwt");
    if (verifed) {
      // redirectHome("/prophile");
      redirectHome("/");
      setAuthenticateRoute(true);
    } else {
      redirectHome("/login");
      // setAuthenticateRoute(true);
    }
  }, []);
 
 

  return <>{AuthenticateRoute ? <IndexRoutes /> : <AuthRoutes />}</>;
};

export default App;
