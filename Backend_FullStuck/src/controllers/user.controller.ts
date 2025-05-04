import type { Context } from "hono";
import { userModel, type UserCreateInput, type UserUpdateInput, type User, type UserWithRelations } from "../models/user.model.ts";

export const userController = {
  // Create a new user
  createUser: async (c: Context) => {
    try {
      const userData: UserCreateInput = await c.req.json();
      
      // Check if user with email already exists
      const existingUser = await userModel.getUserByEmail(userData.email);
      if (existingUser) {
        return c.json({ message: 'User with this email already exists' }, 409);
      }
      
      const newUser = await userModel.createUser(userData);
      return c.json(newUser, 201);
    } catch (error) {
      console.error('Error creating user:', error);
      return c.json({ message: 'Failed to create user', error: (error as Error).message }, 500);
    }
  },

  // Get all users
  getAllUsers: async (c: Context) => {
    try {
      const users = await userModel.getAllUsers();
      return c.json(users, 200);
    } catch (error) {
      console.error('Error fetching users:', error);
      return c.json({ message: 'Failed to fetch users', error: (error as Error).message }, 500);
    }
  },

  // Get user by ID
  getUserById: async (c: Context) => {
    try {
      const userId = parseInt(c.req.param('id'));
      
      if (isNaN(userId)) {
        return c.json({ message: 'Invalid user ID' }, 400);
      }
      
      const user = await userModel.getUserById(userId);
      
      if (!user) {
        return c.json({ message: 'User not found' }, 404);
      }
      
      return c.json(user, 200);
    } catch (error) {
      console.error('Error fetching user:', error);
      return c.json({ message: 'Failed to fetch user', error: (error as Error).message }, 500);
    }
  },

  // Update user
  updateUser: async (c: Context) => {
    try {
      const userId = parseInt(c.req.param('id'));
      const userData: UserUpdateInput = await c.req.json();
      
      if (isNaN(userId)) {
        return c.json({ message: 'Invalid user ID' }, 400);
      }
      
      // Check if user exists
      const existingUser = await userModel.getUserById(userId);
      if (!existingUser) {
        return c.json({ message: 'User not found' }, 404);
      }
      
      // If email is being changed, check if it's already taken
      if (userData.email && userData.email !== existingUser.email) {
        const userWithEmail = await userModel.getUserByEmail(userData.email);
        if (userWithEmail) {
          return c.json({ message: 'Email already in use' }, 409);
        }
      }
      
      const updatedUser = await userModel.updateUser(userId, userData);
      return c.json(updatedUser, 200);
    } catch (error) {
      console.error('Error updating user:', error);
      return c.json({ message: 'Failed to update user', error: (error as Error).message }, 500);
    }
  },

  // Delete user
  deleteUser: async (c: Context) => {
    try {
      const userId = parseInt(c.req.param('id'));
      
      if (isNaN(userId)) {
        return c.json({ message: 'Invalid user ID' }, 400);
      }
      
      // Check if user exists
      const existingUser = await userModel.getUserById(userId);
      if (!existingUser) {
        return c.json({ message: 'User not found' }, 404);
      }
      
      await userModel.deleteUser(userId);
      return c.json({ message: 'User deleted successfully' }, 200);
    } catch (error) {
      console.error('Error deleting user:', error);
      return c.json({ message: 'Failed to delete user', error: (error as Error).message }, 500);
    }
  },
};