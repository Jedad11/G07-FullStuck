import { Axios } from "@/utils/axiosInstace";

export const Login = async (email, password) => {
    try {
        const response = await Axios.post('/auth/login',{
            email,
            password
        });
        return {
            success: true,
            data: response.data,
            msg: 'Login successfully'
        }
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`
        }
    }
}