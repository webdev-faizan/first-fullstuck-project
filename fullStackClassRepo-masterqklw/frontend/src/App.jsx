import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Layout from "./components/layout.jsx";
import NotFoundPage from "./components/notfoundpage.jsx";
import UserProfile from "./components/userProfile.jsx";
import MultipleRoutes from "./routes";
import Auth from "./routes/auth";
import "./App.css";
import { useDispatch, useStore } from "./store/index.jsx";
import { http, updateToken } from "./http/http.js";
import { useQuery } from "react-query";
import { userQuery } from "./query/quries.js";
import { gapi } from "gapi-script";
import "./firebase";
export const App = () => {
  const clientId =
    "57664316633-j7i7juosi15m24dgj01d2bipo5loplhr.apps.googleusercontent.com";
  const location = useLocation();
const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const { data, isLoading, error, refetch } = useQuery("USER", () => {
    if (!token) return;

    return userQuery();
  });

  useEffect(() => {
    updateToken(token);
    if (token) {
      refetch();
    }
  }, []);

  useEffect(() => {
    if (data) {
      dispatch({ type: "ADD_LOGGINED_USER", payload: data.user });
    }
  }, [data, dispatch]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      if (location.pathname === "/") {
        navigate("/userProfile");
      } else {
        navigate(location.pathname);
      }
    }
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<Auth></Auth>}></Route>

          <Route element={<Layout></Layout>}>
            <Route path="/userprofile" element={<UserProfile></UserProfile>} />
          </Route>

          <Route
            path="routes/*"
            element={<MultipleRoutes></MultipleRoutes>}
          ></Route>

          <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
