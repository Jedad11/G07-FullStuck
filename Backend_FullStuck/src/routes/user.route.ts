import { Hono } from "hono";
import { userController } from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.get("/", userController.getAllUsers)              
userRouter.post("/", userController.createUser);
userRouter.get("/:id", userController.getUserById) 
userRouter.patch("/:id", userController.updateUser)
userRouter.delete("/:id", userController.deleteUser); 


export default userRouter;