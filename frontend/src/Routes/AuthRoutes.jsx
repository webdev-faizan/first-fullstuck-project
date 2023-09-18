import { Routes, Route } from "react-router-dom";
import Singup from "../components/Auth/Singup";
import Login from "../components/Auth/Login";
import Email from "../components/Auth/Email";
import Code from "../components/Auth/Code";
import ChangePassword from "../components/Auth/ChangePassword";

import React from "react";

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/singup" element={<Singup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/email" element={<Email />}></Route>
        <Route path="/code" element={<Code />}></Route>
        <Route path="/changepassword" element={<ChangePassword />}></Route>
      </Routes>
    </>
  );
};

export default AuthRoutes;
