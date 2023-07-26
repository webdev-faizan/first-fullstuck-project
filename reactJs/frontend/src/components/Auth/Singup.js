import React, {useState } from "react";
import { NavLink } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import { Cookies } from "react-cookie";
import { http } from "../../Server/http";

const Singup = () => {
  const [formInputHandler, updteInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
  const [msg, setmsg] = useState();

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
    if (!formInputHandler.fname) {
      error.fname = "Frist Name can not be Blank";
      return error;
    }

    if (!formInputHandler.lname) {
      error.lname = "Last Name can not be Blank";
      return error;
    }

    if (!formInputHandler.email) {
      error.email = "Email can not be Blank";
      return error;
    }

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

    postRequest();

    return error;
  }
  async function postRequest() {
    try {
      await http.post("/singup", { ...formInputHandler }).then((resp) => {
        if (resp.status === 201) {
          const cookie = new Cookies();
          const ExpireTime = new Date(Date.now() + 24 + 60 * 60 * 1000);
          cookie.set("jwt", resp.data.authToken, {
            expires: ExpireTime,
          });
          window.location.reload();
        }
      });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return setmsg("Email address already exists!");
      } else if (error == "AxiosError: Network Error") {
        alert("plase connect the internet connection");
      } else {
        console.error("Error signing up:", error.message);

        // alert('plase connect the enternet connection')
      }
    }
  }

  return (
    <div className="frombg">
      <form
        className="  m-auto"
        action=""
        onSubmit={subMit}
        style={{ width: "400px" }}
      >
        <div className="input-parent ">
          <input
            className={`form-control me-3 d-block ${
              errorMsg.fname ? "error" : "success"
            }`}
            onChange={valueHandler}
            type="text"
            id="fname"
            name="fname"
            autoFocus
            placeholder="Frist Name"
          />

          <div className="formDetecter">
            {errorMsg.fname ? (
              <ErrorIcon className="errorSymbol"></ErrorIcon>
            ) : (
              <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
            )}
          </div>

          <small>{errorMsg?.fname}</small>
        </div>
        <div className="input-parent">
          <input
            onChange={valueHandler}
            type="text"
            id="lname"
            className={`form-control ${errorMsg.lname ? "error" : "success"}`}
            name="lname"
            placeholder=" last Name"
          />

          <div className="formDetecter">
            {errorMsg.lname ? (
              <ErrorIcon className="errorSymbol"></ErrorIcon>
            ) : (
              <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
            )}
          </div>

          <small>{errorMsg?.lname}</small>
        </div>

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
          <small>{msg}</small>
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
            placeholder="Password"
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

        <div className="d-flex justify-content-center mt-2">
          <input
            type="submit"
            value="Create Account"
            className="btn btn-primary w-100"
          />
        </div>
        <p className="text-center pb-3 fs-2 my-4 font-italic text-white">
          Already have an account?
          <NavLink className={"ms-3 fs-1 text-success"} to="/login">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};
export default Singup;
