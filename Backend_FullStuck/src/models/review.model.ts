import { db } from "../index.ts";

export interface ReviewCreateInput {
  residentId: number;
  userId: number;
  cleanlinessRating: number;
  serviceRating: number;
  locationRating: number;
  facilitiesRating: number;
  overallRating: number;
  message: string;
  guestStatus: string;
  stayPeriod: string;
}

export interface ReviewUpdateInput {
  cleanlinessRating?: number;
  serviceRating?: number;
  locationRating?: number;
  facilitiesRating?: number;
  overallRating?: number;
  message?: string;
  guestStatus?: string;
  stayPeriod?: string;
}

export interface Review {
  id: number;
  residentId: number;
  userId: number;
  cleanlinessRating: number;
  serviceRating: number;
  locationRating: number;
  facilitiesRating: number;
  overallRating: number;
  message: string;
  guestStatus: string;
  stayPeriod: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewWithRelations extends Review {
  resident: any;
  user: any;
}

export const reviewModel = {
  // Create a new review
  createReview: async (data: ReviewCreateInput) => {
    return db.review.create({
      data,
      include: {
        resident: true,
        user: true,
      },
    });
  },

  // Get all reviews
  getAllReviews: async () => {
    return db.review.findMany({
      include: {
        resident: true,
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  // Get review by ID
  getReviewById: async (id: number) => {
    return db.review.findUnique({
      where: { id },
      include: {
        resident: true,
        user: true,
      },
    });
  },

  // Get reviews by user ID
  getReviewsByUserId: async (userId: number) => {
    return db.review.findMany({
      where: { userId },
      include: {
        resident: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  // Get reviews by resident ID
  getReviewsByResidentId: async (residentId: number) => {
    return db.review.findMany({
      where: { residentId },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  // Update review
  updateReview: async (id: number, data: ReviewUpdateInput) => {
    return db.review.update({
      where: { id },
      data,
      include: {
        resident: true,
        user: true,
      },
    });
  },

  // Delete review
  deleteReview: async (id: number) => {
    return db.review.delete({
      where: { id },
    });
  },
};