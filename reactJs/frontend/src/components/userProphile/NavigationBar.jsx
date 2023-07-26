import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="" style={{ marginTop: "8rem" }}>
      <ul className="d-flex justify-content-evenly fs-1 ">
        <li className="">
          <NavLink to={"/prophile"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"userinfo"}>UserProphile</NavLink>
        </li>
        <li>
          <NavLink to={"setting"}>Setting</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
