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

  getAverageRatingsByResidentId: async (residentId: number) => {
    const reviews = await db.review.findMany({
      where: { residentId },
      select: {
        cleanlinessRating: true,
        serviceRating: true,
        locationRating: true,
        facilitiesRating: true,
      },
    });

    const count = reviews.length;
    if (count === 0) return null;

    const total = reviews.reduce(
      (acc, curr) => {
        acc.cleanliness += curr.cleanlinessRating;
        acc.service += curr.serviceRating;
        acc.location += curr.locationRating;
        acc.facilities += curr.facilitiesRating;
        return acc;
      },
      { cleanliness: 0, service: 0, location: 0, facilities: 0 }
    );

    return {
      cleanliness: total.cleanliness / count,
      service: total.service / count,
      location: total.location / count,
      facilities: total.facilities / count,
      overall:
        (total.cleanliness + total.service + total.location + total.facilities) /
        (4 * count),
    };
  },

  ResidentWithAvgRating: async () => {
    // ดึง resident ทั้งหมด
    const residents = await db.resident.findMany({
      select: {
        id: true,
        residentName: true,
        info: {
          select: {
            rentalPrice: true,
            roomType: true,
          },
        },
        address: {
          select: {
            houseNumber: true,
            street: true,
            subDistrict: true,
            district: true,
            province: true,
            postalCode: true,
          },
        },
      },
    });

    // ดึงค่า avg overallRating แยก residentId
    const avgRatings = await db.review.groupBy({
      by: ['residentId'],
      _avg: {
        overallRating: true,
      },
    });

    // แปลง array เป็น map residentId -> avgRating
    const ratingMap = new Map(avgRatings.map(r => [r.residentId, r._avg.overallRating]));

    // ผนวก avgRating เข้า resident
    const residentsWithAvgRating = residents.map(r => ({
      ...r,
      avgOverallRating: ratingMap.get(r.id) ?? null,
    }));

    return residentsWithAvgRating;
  }

};