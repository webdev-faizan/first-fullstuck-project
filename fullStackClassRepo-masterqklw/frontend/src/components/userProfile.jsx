import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import UserCard from "./userCards";

import { http } from "../http/http";

export const UserProfile = () => {
  const [image, setImage] = useState(null);
  async function GetOtp() {
    await http.get("/auth/otp").then((resp) => {
      console.log(resp);
      setImage(resp.data.data);
    });
  }
  async function sendCode(code) {
    http.post("/auth/otp", { code }).then((resp) => {
      console.log(resp);
    });
  }

  useEffect(() => {
    GetOtp();
  }, []);
  const user = useStore().loggedInUser;
  return (
    <div className="">
      UserProfile
      <UserCard user={user}></UserCard>
      <div className="w-full max-w-sm bg-white border  border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="block m-auto" src={image} />
      </div>
      <div className="w-full max-w-sm bg-white border  border-purple-900 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 py-7 ">
        <input
          type={"text"}
          className="m-auto block"
          onChange={(e) => sendCode(e.target.value)}
          style={{ border: "2px solid black" }}
        />
      </div>
    </div>
  );
};

export default UserProfile;
