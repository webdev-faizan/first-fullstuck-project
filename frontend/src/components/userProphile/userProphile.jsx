import React from "react";
import Bgimage from "./Bgimage";
import NavigationBar from "./NavigationBar";
import Prophileimage from "./Prophileimage";
import { Outlet } from "react-router-dom";

const UserProphile = () => {
  return (
    <>
      <div className="container">
        <Bgimage />
        <Prophileimage />
        <NavigationBar />
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default UserProphile;
