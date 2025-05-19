import { Hono } from "hono";
import userRouter from "./user.route.ts";
import residentRouter from "./resident.route.ts";
import bookingRouter from "./booking.route.ts";
import reviewRouter from "./review.route.ts";
import authRouter from "./auth.route.ts";

const mainRouter = new Hono();

mainRouter.route("/users", userRouter);
mainRouter.route("/residents", residentRouter);
mainRouter.route("/bookings", bookingRouter);
mainRouter.route("/reviews", reviewRouter);
mainRouter.route("/auth",authRouter);

export default mainRouter;