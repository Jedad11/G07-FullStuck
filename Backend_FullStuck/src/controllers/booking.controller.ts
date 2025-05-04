import type { Context } from "hono";
import { bookingModel, type BookingCreateInput, type BookingUpdateInput, type Booking, type BookingWithRelations } from "../models/booking.model.ts";

export const bookingController = {
  // Create a new booking
  createBooking: async (c: Context) => {
    try {
      const bookingData: BookingCreateInput = await c.req.json();
      const newBooking = await bookingModel.createBooking(bookingData);
      return c.json(newBooking, 201);
    } catch (error) {
      console.error('Error creating booking:', error);
      return c.json({ message: 'Failed to create booking', error: (error as Error).message }, 500);
    }
  },

  // Get all bookings
  getAllBookings: async (c: Context) => {
    try {
      const bookings = await bookingModel.getAllBookings();
      return c.json(bookings, 200);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return c.json({ message: 'Failed to fetch bookings', error: (error as Error).message }, 500);
    }
  },

  // Get booking by ID
  getBookingById: async (c: Context) => {
    try {
      const bookingId = parseInt(c.req.param('id'));
      
      if (isNaN(bookingId)) {
        return c.json({ message: 'Invalid booking ID' }, 400);
      }
      
      const booking = await bookingModel.getBookingById(bookingId);
      
      if (!booking) {
        return c.json({ message: 'Booking not found' }, 404);
      }
      
      return c.json(booking, 200);
    } catch (error) {
      console.error('Error fetching booking:', error);
      return c.json({ message: 'Failed to fetch booking', error: (error as Error).message }, 500);
    }
  },

  // Get bookings by user ID
  getBookingsByUserId: async (c: Context) => {
    try {
      const userId = parseInt(c.req.param('userId'));
      
      if (isNaN(userId)) {
        return c.json({ message: 'Invalid user ID' }, 400);
      }
      
      const bookings = await bookingModel.getBookingsByUserId(userId);
      return c.json(bookings, 200);
    } catch (error) {
      console.error('Error fetching user bookings:', error);
      return c.json({ message: 'Failed to fetch bookings', error: (error as Error).message }, 500);
    }
  },

  // Get bookings by resident ID
  getBookingsByResidentId: async (c: Context) => {
    try {
      const residentId = parseInt(c.req.param('residentId'));
      
      if (isNaN(residentId)) {
        return c.json({ message: 'Invalid resident ID' }, 400);
      }
      
      const bookings = await bookingModel.getBookingsByResidentId(residentId);
      return c.json(bookings, 200);
    } catch (error) {
      console.error('Error fetching resident bookings:', error);
      return c.json({ message: 'Failed to fetch bookings', error: (error as Error).message }, 500);
    }
  },

  // Update booking
  updateBooking: async (c: Context) => {
    try {
      const bookingId = parseInt(c.req.param('id'));
      const bookingData: BookingUpdateInput = await c.req.json();
      
      if (isNaN(bookingId)) {
        return c.json({ message: 'Invalid booking ID' }, 400);
      }
      
      // Check if booking exists
      const existingBooking = await bookingModel.getBookingById(bookingId);
      if (!existingBooking) {
        return c.json({ message: 'Booking not found' }, 404);
      }
      
      const updatedBooking = await bookingModel.updateBooking(bookingId, bookingData);
      return c.json(updatedBooking, 200);
    } catch (error) {
      console.error('Error updating booking:', error);
      return c.json({ message: 'Failed to update booking', error: (error as Error).message }, 500);
    }
  },

  // Delete booking
  deleteBooking: async (c: Context) => {
    try {
      const bookingId = parseInt(c.req.param('id'));
      
      if (isNaN(bookingId)) {
        return c.json({ message: 'Invalid booking ID' }, 400);
      }
      
      // Check if booking exists
      const existingBooking = await bookingModel.getBookingById(bookingId);
      if (!existingBooking) {
        return c.json({ message: 'Booking not found' }, 404);
      }
      
      await bookingModel.deleteBooking(bookingId);
      return c.json({ message: 'Booking deleted successfully' }, 200);
    } catch (error) {
      console.error('Error deleting booking:', error);
      return c.json({ message: 'Failed to delete booking', error: (error as Error).message }, 500);
    }
  },
};