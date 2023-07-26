import { Router } from "express";
import authGoogle from "../Controllers/auth/auth.google.js";
import SignupController from "../Controllers/auth/auth.Singup.js";
import Login from "../Controllers/auth/Login.js";
import Facebook from "../Controllers/auth/auth.facebook.js";
const AuthRouter = Router();
AuthRouter.post("/signup", SignupController);
AuthRouter.post("/google", authGoogle);
AuthRouter.post("/login", Login);
AuthRouter.post("/facebook", Facebook);

export default AuthRouter;
