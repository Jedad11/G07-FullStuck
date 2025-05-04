import { db } from "../index.ts";

export interface BookingCreateInput {
  residentId: number;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roomType: string;
  bedType: string;
  checkInDate: Date;
  checkOutDate: Date;
}

export interface BookingUpdateInput {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  roomType?: string;
  bedType?: string;
  checkInDate?: Date;
  checkOutDate?: Date;
}

export interface Booking {
  id: number;
  residentId: number;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roomType: string;
  bedType: string;
  checkInDate: Date;
  checkOutDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface BookingWithRelations extends Booking {
  resident: any;
  user: any;
}

export const bookingModel = {
  // Create a new booking
  createBooking: async (data: BookingCreateInput) => {
    return db.booking.create({
      data,
      include: {
        resident: true,
        user: true,
      },
    });
  },

  // Get all bookings
  getAllBookings: async () => {
    return db.booking.findMany({
      include: {
        resident: true,
        user: true,
      },
    });
  },

  // Get booking by ID
  getBookingById: async (id: number) => {
    return db.booking.findUnique({
      where: { id },
      include: {
        resident: true,
        user: true,
      },
    });
  },

  // Get bookings by user ID
  getBookingsByUserId: async (userId: number) => {
    return db.booking.findMany({
      where: { userId },
      include: {
        resident: true,
      },
    });
  },

  // Get bookings by resident ID
  getBookingsByResidentId: async (residentId: number) => {
    return db.booking.findMany({
      where: { residentId },
      include: {
        user: true,
      },
    });
  },

  // Update booking
  updateBooking: async (id: number, data: BookingUpdateInput) => {
    return db.booking.update({
      where: { id },
      data,
      include: {
        resident: true,
        user: true,
      },
    });
  },

  // Delete booking
  deleteBooking: async (id: number) => {
    return db.booking.delete({
      where: { id },
    });
  },
};