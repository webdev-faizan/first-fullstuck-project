import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import { useDispatch, useStore } from "../store";
import { http, updateToken } from "../http/http";
import { GoogleLogin } from "react-google-login";
import ReactFacebookLogin from "react-facebook-login";
import { gapi } from "gapi-script";
import axios from "axios";
const clientId =
  "57664316633-j7i7juosi15m24dgj01d2bipo5loplhr.apps.googleusercontent.com";
const clientSecrete = "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";

function LogInPage(props) {
  const [image, setimage] = useState("");
  const [googleLoginClicked, setGoogleLoginClicked] = useState(false);
  // npm i gapi-script react-google-login
  //
  console.log(image);
  const onSuccess = (resp) => {
    console.log("login success", resp);
    setimage(resp.profileObj.imageUrl);
    setGoogleLoginClicked(true);

    http.post("auth/google", { ...resp }).then((resp) => {
      console.log(resp);
    });
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
    console.log(resp);
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
    if (googleLoginClicked) {
      function start() {
        gapi.client.init({
          clientId:
            "57664316633-j7i7juosi15m24dgj01d2bipo5loplhr.apps.googleusercontent.com",
        });
      }
      gapi.load("client:auth2", start);
    }
  }, [googleLoginClicked]);
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            {/* <img src={image}  className="block m-auto my-6 rounded-circle " /> */}

            <h1 className="mb-8 text-3xl text-center">login up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => saveLoginInfo(e)}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => saveLoginInfo(e)}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={loginHandler}
            >
              Login
            </button>

            <p className="text-center my-4">OR</p>
            <div className="row text-center ">
              <img
                src={image}
                className="w-20 text-center outline-none border-0 mix-blend-auto"
              />

              <div className="col-12 ">
                <GoogleLogin
                  clientId={clientId}
                  buttonText={"login"}
                  onSuccess={onSuccess}
                  onFailure={onError}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                ></GoogleLogin>
              </div>
              <div className="col-12">
                <ReactFacebookLogin
                  appId="206207125422645"
                  autoLoad={false}
                  fields="name,email,picture"
                  textButton="login"
                  // scope="name,email,picture"
                  callback={facebookResponse}
                ></ReactFacebookLogin>
                <div className="col-12 flex justify-center">
                  <img
                    src={`data:image/png;base64,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`}
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Create an Account
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
