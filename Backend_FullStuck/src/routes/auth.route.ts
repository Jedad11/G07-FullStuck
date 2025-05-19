import { Hono } from "hono";
import * as authController from "../controllers/auth.controller.ts";

const authRouter = new Hono();

authRouter.post("/login",authController.login);

export default authRouter