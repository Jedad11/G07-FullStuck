import { db } from "../index.ts";
import { hash } from 'bcrypt';

export interface UserCreateInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  profilePicture?: string;
}

export interface UserUpdateInput {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  password?: string; // Added password field for updates
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
    const hashPassword = await hash(data.password, 10)
    return db.user.create({
      data:{
        ...data,
        password: hashPassword,
      }
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
    // Create a copy of data to modify
    const updateData: Partial<UserUpdateInput> = { ...data };
    
    // Hash password if it's being updated
    if (updateData.password) {
      updateData.password = await hash(updateData.password, 10);
    }
    
    // Remove undefined/empty values to prevent Prisma errors
    Object.keys(updateData).forEach((key) => {
      const typedKey = key as keyof UserUpdateInput;
      if (updateData[typedKey] === undefined || updateData[typedKey] === null || updateData[typedKey] === '') {
        delete updateData[typedKey];
      }
    });

    return db.user.update({
      where: { id },
      data: updateData,
    });
  },

  // Delete user
  deleteUser: async (id: number) => {
    return db.user.delete({
      where: { id },
    });
  },
};