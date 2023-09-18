import React, {useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import { Cookies } from "react-cookie";
import axios from "axios";
const ChangePassword = () => {
  const [formInputHandler, updteInputValue] = useState({
    password: "",
    cpassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
  const redirectlogin = useNavigate();
  const valueHandler = (e) => {
    const { value, name } = e.target;

    updteInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const subMit = (e) => {
    e.preventDefault();
    setErrorMsg(validate(formInputHandler));
  };

  // validateion
  function validate(formInputHandler) {
    const error = {};

    if (!formInputHandler.password) {
      error.password = "password can not be blank";
      return error;
    }
    if (!formInputHandler.cpassword) {
      error.cpassword = "password can not be blank";
      return error;
    }
    if (formInputHandler.cpassword != formInputHandler.password) {
      error.password = "password can not be match";
      error.cpassword = "password can not be match";
      return error;
    }

    ChangePassword();
    return error;
  }
  async function ChangePassword() {
    try {
      const cookie = new Cookies();

      const token = cookie.get("verified");
      const instance = axios.create({
        "content-type": "application/json",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 300,
      });

      instance
        .put("http://localhost:8000/v1/auth/changepassword", {
          ...formInputHandler,
        })
        .then((resp) => {
          if (resp.status == 200) {
            alert(resp.data.messxage);
            window.location.reload(true);
          }
        })
        .catch((error) => {
          if (error.response.status == "409") {
            redirectlogin("/login");
          }

          console.log(error);
        });
    } catch (error) {
      alert("error faizan");
    }
  }

  return (
    <div className="frombg">
      <div>
        <form
          className="  m-auto"
          action=""
          onSubmit={subMit}
          style={{ width: "400px" }}
        >
          <div className="input-parent ">
            <input
              className={`form-control ${
                errorMsg.password ? "error" : "success"
              }`}
              onChange={valueHandler}
              type="password"
              id="password"
              name="password"
              placeholder="New Password"
            />
            <div className="formDetecter">
              {errorMsg.password ? (
                <ErrorIcon className="errorSymbol"></ErrorIcon>
              ) : (
                <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
              )}
            </div>
            <small>{errorMsg?.password}</small>
          </div>

          <div className="input-parent ">
            <input
              className={`form-control ${
                errorMsg.cpassword ? "error" : "success"
              }`}
              onChange={valueHandler}
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
            />
            <div className="formDetecter">
              {errorMsg.cpassword ? (
                <ErrorIcon className="errorSymbol"></ErrorIcon>
              ) : (
                <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
              )}
            </div>
            <small>{errorMsg?.cpassword}</small>
          </div>

          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="Change Password"
              className="btn btn-primary w-100"
            />
          </div>
        </form>
        <div className="text-center mt-3">
          <spna className="fs-3 text-white pe-3"> Go Back login ?</spna>{" "}
          <NavLink to="/login" className=" text-success forgetpas ">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
