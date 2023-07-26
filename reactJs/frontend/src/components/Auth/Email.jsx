import React, { useRef, useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import { NavLink, useNavigate } from "react-router-dom";
import { http } from "../../Server/http";
import { Cookies } from "react-cookie";

const Email = () => {
  const [formInputHandler, updteInputValue] = useState({
    email: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
  const redirectCode = useNavigate();
  const [findemail, setError] = useState("");

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

  // validation
  function validate(formInputHandler) {
    const error = {};

    if (!formInputHandler.email) {
      error.email = "Email can not be Blank";
      return error;
    }
    forGetPassword();
    return error;
  }
  const cookie = new Cookies();
  async function forGetPassword() {
    try {
      http
        .post("/forgetPassword", { ...formInputHandler })
        .then((resp) => {
          if (resp.status == 200) {
            console.log(resp);
            alert("Enter the code " + resp.data.secreate);

            cookie.set("verified", resp.data.authToken, {
              expires: new Date(Date.now() + 10 * 60 * 1000),
            });

            redirectCode("/code");
          }
        })
        .catch((error) => {
          if (error.message == "Network Error") {
            alert("please connect to the internet");
          } else if (error && error.response.status == 401) {
            setError(error.response.data.message);
          }
          console.log(error);
        });
    } catch (error) {
      alert("some thing when wrong");
    }

  }

  return (
    <div className="frombg">
      {/* <h1>{code}</h1> */}
      <div>
        <form
          className="m-auto "
          action=""
          onSubmit={subMit}
          style={{ width: "400px" }}
        >
          <div className="input-parent ">
            <input
              className={`form-control ${errorMsg.email ? "error" : "success"}`}
              onChange={valueHandler}
              type="email"
              id="email"
              name="email"
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
            <small>{findemail}</small>
          </div>

          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="send email"
              className="btn btn-primary w-100 text-danger "
            />
          </div>
        </form>
        <div className="text-center mt-3">
          <span className="fs-3 text-white pe-3"> Go Back login ?</span>
          <NavLink to="/login" className=" text-success forgetpas ">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Email;
