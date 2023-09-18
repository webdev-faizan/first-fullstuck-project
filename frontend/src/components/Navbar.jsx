import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Stylesheet/Navbar.css";

function Navbar() {
  const [d_none, d_block] = useState(false);
  return (
    <>
      <nav className="mainNavBar">
        <div
          className={`haumbargar ${d_none ? "cross" : ""}`}
          onClick={() => d_block(!d_none)}
        >
          <div className="hidden"></div>
          <div className="hidden"></div>
          <div className="hidden"></div>
        </div>

        <div className="log">
          {" "}
          <img src="./images/logo(1).png" alt=" Internet error" />{" "}
          <span>FelxStart</span>{" "}
        </div>
        <ul className={d_none ? "block" : ""}>
          <NavLink className="navlink" to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink className="navlink" to={"about"}>
            <li>About</li>
          </NavLink>
          <NavLink className="navlink" to={"services"}>
            <li>Services</li>
          </NavLink>
          <NavLink className="navlink" to={"portfolio"}>
            <li>Portifolo</li>
          </NavLink>
          <NavLink className="navlink" to={"team"}>
            <li>Team</li>
          </NavLink>
          <NavLink className="navlink" to={"blogs"}>
            <li>Blog</li>
          </NavLink>
          <NavLink className="navlink" to={"prophile"}>
            <li>User Profile</li>
          </NavLink>
          <NavLink className="navlink" to={"contactus"}>
            <li>Contactus</li>
          </NavLink>
          <button>Get Start</button>
        </ul>

        <div className={d_none ? "background" : ""}></div>
      </nav>
    </>
  );
}

export default memo(Navbar);
