import { Axios } from "axiosInstace";

export const getAllUsers = async () => {
    try {
        const response = await Axios.get('/users');
        return response.data
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`,
        };
    }
}

export const createUser = async (firstname, lastname, phonenumber, email, profilepicture = undefined) => {
    try {
        const response = await Axios.post('/users', {
            firstName: firstname,
            lastName: lastname,
            phoneNumber: phonenumber,
            email: email,
            profilePicture: profilepicture
        });
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`,
        };
    }
}

export const getUserById = async (id) => {
    try {
        
    } catch (error) {
        
    }
}