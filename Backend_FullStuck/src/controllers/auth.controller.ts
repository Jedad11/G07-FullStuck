import type { Context } from "hono"
import { authModel } from "../models/auth.model.ts"
import { generateToken } from "../utils/token.ts"

interface Auth {
    email: string,
    password: string
}

export const login = async (c: Context) => {
    try {
        const data = await c.req.json<Auth>();
        
        const user = await authModel.findUserByEmail(data.email);
        
        if(!user){
            return c.json ({ msg: "Invalid email" },401);
        }
        const isValid = await authModel.validatePassword(data.password, user.password);
        if(!isValid){
            return c.json ({msg: "Invalid password"},401);
        }
        const token = generateToken(user)
        return c.json ({success: true, data: token},200)
    } catch (error) {
        console.error(error)
        return c.json({ success: false, msg: 'Failed to log in' }, 500)
    }
}