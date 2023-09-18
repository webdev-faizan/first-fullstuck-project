import React, { useRef, useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import { NavLink } from "react-router-dom";
import { http } from "../../Server/http";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import Googlelogin from "./GoogleLogin";
// import ErrorIcon from "@mui/icons-material/Error";

const Login = () => {
  const [formInputHandler, updteInputValue] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
  const [checkError, setError] = useState();
  console.log(formInputHandler);
  const valueHandler = (e) => {
    const { value, name } = e.target;

    updteInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // const redirectHome = useNavigate();
  const subMit = (e) => {
    e.preventDefault();
    setErrorMsg(validate(formInputHandler));
  };

  // validateion
  function validate(formInputHandler) {
    const error = {};

    if (!formInputHandler.email) {
      error.email = "Email can not be Blank";
      return error;
    }
    if (!formInputHandler.password) {
      error.password = "password can not be blank";
      return error;
    }

    login();
    return error;
  }
  // post request to login
  async function login() {
    try {
      await http
        .post("/login", { ...formInputHandler })
        .then((resp) => {
          const cookie = new Cookies();
          if (resp.status == 200) {
            cookie.set("jwt", resp.data.authToken, {
              expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            });
            //  redirectHome("/");
            window.location.reload();
          }
        })
        .catch((error) => {
          if (error.message == "Network Error") {
            alert(
              "hi " +
                formInputHandler.email +
                " please connected to the internet"
            );
          } else {
            setError(error.response.data.message);
          }
        });
    } catch (error) {
      if (error == "AxiosError: Network Error") {
        alert("plase connect the internet connection");
      } else if (error.response.status == 401) {
      } else {
        // console.warn(error);
        alert("plase connect the internet connection" + "no");
      }
    }
  }

  return (
    <div className="frombg">
      <div>
        <form
          className="m-auto"
          action=""
          onSubmit={subMit}
          style={{ width: "400px" }}
        >
          <div className="input-parent">
            <input
              onChange={valueHandler}
              type="email"
              name="email"
              id="email"
              className={`form-control ${errorMsg.email ? "error" : "success"}`}
              placeholder="email"
            />
            <div className="formDetecter">
              {errorMsg.email ? (
                <ErrorIcon className="errorSymbol"></ErrorIcon>
              ) : (
                <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
              )}
            </div>

            <small>{errorMsg?.email}</small>
            <small>{checkError}</small>
          </div>

          <div className="input-parent ">
            <input
              className={`form-control ${
                errorMsg.password ? "error" : "success"
              }`}
              onChange={valueHandler}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <div className="formDetecter">
              {errorMsg.password ? (
                <ErrorIcon className="errorSymbol"></ErrorIcon>
              ) : (
                <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
              )}
            </div>
            <small>{errorMsg?.password}</small>
            <small>{checkError}</small>
          </div>

          <div className="d-flex justify-content-center ">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary w-100 "
            />
          </div>

          {/* <p className="text-center pb-3 fs-3">Singup</p> */}
        </form>
        <p className="text-center fs-3 text-white mt-3">OR</p>
        <div className="text-center my-5">
          <Googlelogin />
        </div>

        <div className="text-center mt-3">
          <NavLink to="/email" className="forgetpas text-danger ">
            Forget Password
          </NavLink>
        </div>
        <div className="text-center ">
          <span className="fs-3 text-white pe-4 d-inline-block mt-2">
            {" "}
            If you have not account ?
          </span>
          <NavLink to="/singup" className="forgetpas text-danger  ">
            singup
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Login;
