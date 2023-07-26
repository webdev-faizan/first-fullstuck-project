import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import { useStore, useDispatch } from "../store";
import { http, updateToken } from "../http/http";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import axios from "axios";

function SignUpPage(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    fullname: "",
    picture: "",
  });
  const [imag, setimg] = useState("");
  const imagesRef = ref(storage, "faizan.jpg");
  const MountimagesRef = ref(storage, "images/faizan.jpg");
  const uploadimg = (e) => {
    // storage
    const f = ref(storage, "images/video.mp4");
    uploadBytes(f, e.target.files[0]).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    const f = getDownloadURL(ref(storage, "images/video.mp4"));
    console.log(f);
  }, []);

  const navigate = useNavigate();

  const base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onChangeListner = (e) => {
    let updatedUserData = userData;

    if (e.target.id) {
      const profile = e.target.files[0];
      base64(profile)
        .then((data) => {
          updatedUserData = { ...updatedUserData, [e.target.name]: data };
          setUserData(updatedUserData);
        })
        .catch((error) => {
          console.log("here", error);
        });
      return;
    }

    updatedUserData = { ...updatedUserData, [e.target.name]: e.target.value };
    setUserData(updatedUserData);
  };

  const allUsers = useStore().allUsers;
  const dispatch = useDispatch();

  const createAccount = async () => {
    if (!userData.password || !userData.confirm_password) {
      Toastify({
        text: "password fields are empty",
        duration: 3000,
        close: true,
        style: {
          background: "linear-gradient(to right, #db0000, #ff9100)",
        },
      }).showToast();
      return;
    }

    if (userData.password !== userData.confirm_password) {
      console.log(
        "inCreateAccount",
        userData.password,
        userData.confirm_password
      );
      Toastify({
        text: "Passwords do not match!",
        duration: 3000,
        close: true,
        style: {
          background: "linear-gradient(to right, #db0000, #ff9100)",
        },
      }).showToast();
      return;
    }

    await http
      .post("/auth/signup", {
        ...userData,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: "ADD_LOGGINED_USER", payload: res.data.user });

        Toastify({
          text: "Account created!",
          duration: 3000,
          close: true,
          style: {
            background: "linear-gradient(to right, #00db1d, #ff9100)",
          },
        }).showToast();

        navigate("/userprofile");
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <div>
      <img src="https://firebasestorage.googleapis.com/v0/b/my-frist-project-e9e48.appspot.com/o/images%2Ffaizanali.png?alt=media&token=b85a02f5-8e4e-4a47-88e3-77f3ca6fbda4" />
      {/* <img src="https://firebasestorage.googleapis.com/v0/b/my-frist-project-e9e48.appspot.com/o/images%2Ffaizan.png?alt=media&token=8867c20d-9efd-441c-9e2d-d2e25a226780" /> */}
      <video src="https://firebasestorage.googleapis.com/v0/b/my-frist-project-e9e48.appspot.com/o/images%2Fvideo.mp4?alt=media&token=e350a9cc-a938-43ec-9c0c-037656c87cb8" controls>a:ODJpowqj</video>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              onChange={(e) => onChangeListner(e)}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => onChangeListner(e)}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => onChangeListner(e)}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              onChange={(e) => onChangeListner(e)}
              placeholder="Confirm Password"
            />
            <div className="flex justify-center">
              <div className="mb-3 w-96">
                <label
                  for="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Default file input example
                </label>
                <input
                  className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFile"
                  name="picture"
                  onChange={uploadimg}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={createAccount}
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
