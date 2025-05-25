import { hash, compare } from 'bcrypt';
import { db } from '../index.ts';

export const authModel = {
  findUserByEmail: async (Email: string) => {
    return db.user.findUnique({
      where: {
        email: Email
      }
    })
  },

  validatePassword: async (password: string, hash: string) => {
    return compare(password, hash)
  }
}