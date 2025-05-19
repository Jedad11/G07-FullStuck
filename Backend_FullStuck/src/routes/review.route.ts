import { Hono } from "hono";
import { reviewController } from "../controllers/review.controller.ts";

const reviewRouter = new Hono();

reviewRouter.get("/", reviewController.getAllReviews);
reviewRouter.post("/", reviewController.createReview);
reviewRouter.get("/:id", reviewController.getReviewById);
reviewRouter.patch("/:id", reviewController.updateReview);
reviewRouter.delete("/:id", reviewController.deleteReview);
reviewRouter.get("/user/:userId", reviewController.getReviewsByUserId);
reviewRouter.get("/resident/:residentId", reviewController.getReviewsByResidentId);

export default reviewRouter;