import React, { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import axios from "axios";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Code = () => {
  const [formInputHandler, updteInputValue] = useState({
    code: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
  const [validateError, setvalidateError] = useState("");
  const redirectChangePassword = useNavigate();
  const cookie = new Cookies();
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

    if (!formInputHandler.code) {
      error.code = "code cannot be blank";
      return error;
    }

    senCode();
    return error;
  }

  async function senCode() {
    try {
      const token = cookie.get("verified");
      const instance = axios.create({
        "content-type": "application/json",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 3000,
      });

      instance
        .post("http://localhost:8000/v1/auth/code", { ...formInputHandler })
        .then((resp) => {
          if (resp.status == 200) {
            redirectChangePassword("/changepassword");
          }
          console.log(resp);
        })
        .catch((error) => {
          if (error.response.status == 401) {
            setvalidateError(error.response.data.message);
          }
        });
    } catch (error) {
      console.log("error faizan");
    }
  }

  return (
    <div>
      <h1>f</h1>
      <div className="frombg">
        <form
          className="m-auto"
          action=""
          onSubmit={subMit}
          style={{ width: "400px" }}
        >
          <div className="input-parent ">
            <input
              className={`form-control ${errorMsg.code ? "error" : "success"}`}
              onChange={valueHandler}
              type="text"
              id="password"
              name="code"
              placeholder="code"
            />

            <div className="formDetecter">
              {errorMsg.code ? (
                <ErrorIcon className="errorSymbol"></ErrorIcon>
              ) : (
                <CheckCircleIcon className="successSymbol"></CheckCircleIcon>
              )}
            </div>

            <small>{errorMsg?.code}</small>
            <small>{validateError}</small>
          </div>

          <div className="d-flex justify-content-center ">
            <input
              type="submit"
              value="send code"
              className="btn btn-primary w-100"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Code;
