import { Hono } from "hono";
import { bookingController } from "../controllers/booking.controller.ts";

const bookingRouter = new Hono();

bookingRouter.get("/", bookingController.getAllBookings);
bookingRouter.post("/", bookingController.createBooking);
bookingRouter.get("/:id", bookingController.getBookingById);
bookingRouter.patch("/:id", bookingController.updateBooking);
bookingRouter.delete("/:id", bookingController.deleteBooking);
bookingRouter.get("/user/:userId", bookingController.getBookingsByUserId);
bookingRouter.get("/resident/:residentId", bookingController.getBookingsByResidentId);

export default bookingRouter;