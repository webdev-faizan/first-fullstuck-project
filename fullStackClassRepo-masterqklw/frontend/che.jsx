import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import { useDispatch, useStore } from "../store";
import { http, updateToken } from "../http/http";
import { GoogleLogin } from "react-google-login";
import ReactFacebookLogin from "react-facebook-login";
import { gapi } from "gapi-script";
const clientId =
  "57664316633-j7i7juosi15m24dgj01d2bipo5loplhr.apps.googleusercontent.com";
const clientSecrete = "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";

function LogInPage(props) {
  const [image, setimage] = useState("");
  const [googleLoginClicked, setGoogleLoginClicked] = useState(false); // add state variable for GoogleLogin

  const onSuccess = (res) => {
    console.log("login success", res);
    setimage(res.profileObj.imageUrl);
    setGoogleLoginClicked(true); // set state to true when GoogleLogin is clicked
  };

  const onError = (error) => {
    console.log(error);
  };

  const Navigate = useNavigate();

  const allUsers = useStore().allUsers;
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const facebookResponse = (resp) => {
    console.log(resp.picture.data.url);
    setimage(resp.picture.data.url);
  };
  const saveLoginInfo = (e) => {
    let newUser = userData;
    newUser = { ...newUser, [e.target.name]: e.target.value };
    setUserData(newUser);
  };

  const loginHandler = async () => {
    let newUser = userData;

    await http
      .post("/auth/login", {
        ...newUser,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: "ADD_LOGGINED_USER", payload: res.data.user });
        Navigate("/userProfile");
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "57664316633-j7i7juosi15m24dgj01d2bipo5loplhr.apps.googleusercontent.com",
      });
    }
    if (googleLoginClicked) { // run only when GoogleLogin is clicked
      gapi.load("client:auth2", start);
    }
  }, [googleLoginClicked]); // add googleLoginClicked as a dependency

}
