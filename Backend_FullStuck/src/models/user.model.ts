import { db } from "../index.ts";

export interface UserCreateInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  profilePicture?: string;
}

export interface UserUpdateInput {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  profilePicture?: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  profilePicture?: string;
}

export interface UserWithRelations extends User {
  bookings: any[];
  reviews: any[];
}

export const userModel = {
  // Create a new user
  createUser: async (data: UserCreateInput) => {
    return db.user.create({
      data
    });
  },

  // Get all users
  getAllUsers: async () => {
    return db.user.findMany();
  },

  // Get user by ID
  getUserById: async (id: number) => {
    return db.user.findUnique({
      where: { id },
      include: {
        bookings: true,
        reviews: true,
      },
    });
  },

  // Get user by email
  getUserByEmail: async (email: string) => {
    return db.user.findUnique({
      where: { email },
    });
  },

  // Update user
  updateUser: async (id: number, data: UserUpdateInput) => {
    return db.user.update({
      where: { id },
      data,
    });
  },

  // Delete user
  deleteUser: async (id: number) => {
    return db.user.delete({
      where: { id },
    });
  },
};