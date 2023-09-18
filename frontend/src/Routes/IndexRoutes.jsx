import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Team from "../components/Team";
import Services from "../components/Services";
import Portifolio from "../components/Portifolio";
import Blogs from "../components/Blogs";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import UserProphile from "../components/userProphile/userProphile";
import Notfound from "../components/Notfound";
import UserInfo from "../components/userProphile/UserInfo";
import Setting from "../components/userProphile/Setting";
import HomePage from "../components/userProphile/HomePage";

import React from "react";

const IndexRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portifolio />} />
        <Route path="team" element={<Team />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="prophile" element={<UserProphile />}>
          <Route index element={<HomePage />} />
          <Route path="userinfo" element={<UserInfo />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="contactus" element={<Contactus />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default IndexRoutes;
