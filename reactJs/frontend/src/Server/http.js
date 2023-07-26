import axios from "axios";
import { Cookies } from "react-cookie";
const cookie = new Cookies();
const token = cookie.get("jwt");
const instance = axios.create({
  baseURL: "http://localhost:8000/v1/auth",
  headers: { "Content-Type": "application/json" },
  timeout: 3000,
});

const http = instance;

const images = axios.create({
  baseURL: "http://localhost:8000/v1",
  headers: {
    "Content-Type": "multipart/form-data",
    authorization: `Bearer ${token}`,
  },
  timeout: 3000,
});

export { http, images };

// http://localhost:9000/v1/auth/signup
