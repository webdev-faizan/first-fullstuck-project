import { Router } from "express";
const Routes = Router();
import AuthRouter from "./auth.Routes.js";

Routes.use("/auth", AuthRouter);

export default Routes;
