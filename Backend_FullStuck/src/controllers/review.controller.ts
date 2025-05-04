import type { Context } from "hono";
import { reviewModel, type ReviewCreateInput, type ReviewUpdateInput, type Review, type ReviewWithRelations } from "../models/review.model.ts";

export const reviewController = {
  // Create a new review
  createReview: async (c: Context) => {
    try {
      const reviewData: ReviewCreateInput = await c.req.json();
      const newReview = await reviewModel.createReview(reviewData);
      return c.json(newReview, 201);
    } catch (error) {
      console.error('Error creating review:', error);
      return c.json({ message: 'Failed to create review', error: (error as Error).message }, 500);
    }
  },

  // Get all reviews
  getAllReviews: async (c: Context) => {
    try {
      const reviews = await reviewModel.getAllReviews();
      return c.json(reviews, 200);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return c.json({ message: 'Failed to fetch reviews', error: (error as Error).message }, 500);
    }
  },

  // Get review by ID
  getReviewById: async (c: Context) => {
    try {
      const reviewId = parseInt(c.req.param('id'));
      
      if (isNaN(reviewId)) {
        return c.json({ message: 'Invalid review ID' }, 400);
      }
      
      const review = await reviewModel.getReviewById(reviewId);
      
      if (!review) {
        return c.json({ message: 'Review not found' }, 404);
      }
      
      return c.json(review, 200);
    } catch (error) {
      console.error('Error fetching review:', error);
      return c.json({ message: 'Failed to fetch review', error: (error as Error).message }, 500);
    }
  },

  // Get reviews by user ID
  getReviewsByUserId: async (c: Context) => {
    try {
      const userId = parseInt(c.req.param('userId'));
      
      if (isNaN(userId)) {
        return c.json({ message: 'Invalid user ID' }, 400);
      }
      
      const reviews = await reviewModel.getReviewsByUserId(userId);
      return c.json(reviews, 200);
    } catch (error) {
      console.error('Error fetching user reviews:', error);
      return c.json({ message: 'Failed to fetch reviews', error: (error as Error).message }, 500);
    }
  },

  // Get reviews by resident ID
  getReviewsByResidentId: async (c: Context) => {
    try {
      const residentId = parseInt(c.req.param('residentId'));
      
      if (isNaN(residentId)) {
        return c.json({ message: 'Invalid resident ID' }, 400);
      }
      
      const reviews = await reviewModel.getReviewsByResidentId(residentId);
      return c.json(reviews, 200);
    } catch (error) {
      console.error('Error fetching resident reviews:', error);
      return c.json({ message: 'Failed to fetch reviews', error: (error as Error).message }, 500);
    }
  },

  // Update review
  updateReview: async (c: Context) => {
    try {
      const reviewId = parseInt(c.req.param('id'));
      const reviewData: ReviewUpdateInput = await c.req.json();
      
      if (isNaN(reviewId)) {
        return c.json({ message: 'Invalid review ID' }, 400);
      }
      
      // Check if review exists
      const existingReview = await reviewModel.getReviewById(reviewId);
      if (!existingReview) {
        return c.json({ message: 'Review not found' }, 404);
      }
      
      const updatedReview = await reviewModel.updateReview(reviewId, reviewData);
      return c.json(updatedReview, 200);
    } catch (error) {
      console.error('Error updating review:', error);
      return c.json({ message: 'Failed to update review', error: (error as Error).message }, 500);
    }
  },

  // Delete review
  deleteReview: async (c: Context) => {
    try {
      const reviewId = parseInt(c.req.param('id'));
      
      if (isNaN(reviewId)) {
        return c.json({ message: 'Invalid review ID' }, 400);
      }
      
      // Check if review exists
      const existingReview = await reviewModel.getReviewById(reviewId);
      if (!existingReview) {
        return c.json({ message: 'Review not found' }, 404);
      }
      
      await reviewModel.deleteReview(reviewId);
      return c.json({ message: 'Review deleted successfully' }, 200);
    } catch (error) {
      console.error('Error deleting review:', error);
      return c.json({ message: 'Failed to delete review', error: (error as Error).message }, 500);
    }
  },
};