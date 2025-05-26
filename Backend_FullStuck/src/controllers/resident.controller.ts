import type { Context } from "hono";
import { residentModel, type ResidentCreateInput, type ResidentUpdateInput, type Resident, type ResidentWithRelations } from "../models/resident.model.ts";

export const residentController = {
  // Create a new resident
  createResident: async (c: Context) => {
    try {
      const residentData: ResidentCreateInput = await c.req.json();
      const newResident = await residentModel.createResident(residentData);
      return c.json(newResident, 201);
    } catch (error) {
      console.error('Error creating resident:', error);
      return c.json({ message: 'Failed to create resident', error: (error as Error).message }, 500);
    }
  },

  // Get all residents
  getAllResidents: async (c: Context) => {
    try {
      const residents = await residentModel.getAllResidents();
      return c.json(residents, 200);
    } catch (error) {
      console.error('Error fetching residents:', error);
      return c.json({ message: 'Failed to fetch residents', error: (error as Error).message }, 500);
    }
  },

  // Get resident by ID
  getResidentById: async (c: Context) => {
    try {
      const residentId = parseInt(c.req.param('id'));
      
      if (isNaN(residentId)) {
        return c.json({ message: 'Invalid resident ID' }, 400);
      }
      
      const resident = await residentModel.getResidentById(residentId);
      
      if (!resident) {
        return c.json({ message: 'Resident not found' }, 404);
      }
      
      return c.json(resident, 200);
    } catch (error) {
      console.error('Error fetching resident:', error);
      return c.json({ message: 'Failed to fetch resident', error: (error as Error).message }, 500);
    }
  },

  // Update resident
  updateResident: async (c: Context) => {
    try {
      const residentId = parseInt(c.req.param('id'));
      const residentData: ResidentUpdateInput = await c.req.json();
      
      if (isNaN(residentId)) {
        return c.json({ message: 'Invalid resident ID' }, 400);
      }
      
      // Check if resident exists
      const existingResident = await residentModel.getResidentById(residentId);
      if (!existingResident) {
        return c.json({ message: 'Resident not found' }, 404);
      }
      
      const updatedResident = await residentModel.updateResident(residentId, residentData);
      return c.json(updatedResident, 200);
    } catch (error) {
      console.error('Error updating resident:', error);
      return c.json({ message: 'Failed to update resident', error: (error as Error).message }, 500);
    }
  },

  // Delete resident
  deleteResident: async (c: Context) => {
    try {
      const residentId = parseInt(c.req.param('id'));
      
      if (isNaN(residentId)) {
        return c.json({ message: 'Invalid resident ID' }, 400);
      }
      
      // Check if resident exists
      const existingResident = await residentModel.getResidentById(residentId);
      if (!existingResident) {
        return c.json({ message: 'Resident not found' }, 404);
      }
      
      await residentModel.deleteResident(residentId);
      return c.json({ message: 'Resident deleted successfully' }, 200);
    } catch (error) {
      console.error('Error deleting resident:', error);
      return c.json({ message: 'Failed to delete resident', error: (error as Error).message }, 500);
    }
  },

  ResidentCardCondo: async (c:Context) => {
    try {
      const resident = await residentModel.ResidentCardCondo();
      return c.json(resident, 200);
    } catch (error) {
      console.error('Error fetching resident:', error);
      return c.json({ message: 'Failed to fetch resident', error: (error as Error).message }, 500);
    }
  },

  ResidentCardApartment: async (c:Context) => {
    try {
      const resident = await residentModel.ResidentCardApartment();
      return c.json(resident, 200);
    } catch (error) {
      console.error('Error fetching resident:', error);
      return c.json({ message: 'Failed to fetch resident', error: (error as Error).message }, 500);
    }
  },

  ResidentCard: async (c:Context) => {
    try {
      const resident = await residentModel.ResidentCard();
      return c.json(resident, 200);
    } catch (error) {
      console.error('Error fetching resident:', error);
      return c.json({ message: 'Failed to fetch resident', error: (error as Error).message }, 500);
    }
  }
};