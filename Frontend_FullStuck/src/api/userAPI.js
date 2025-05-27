import { Axios } from "@/utils/axiosInstace";

export const getAllUsers = async () => {
    try {
        const response = await Axios.get('/users');
        return { 
            success: true, 
            data: response.data, 
            msg: 'Users fetched successfully' };
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const createUser = async (UserData) => {
    try {
        const response = await Axios.post('/users', UserData);
        return { 
            success: true, 
            data: response.data, 
            msg: 'User created successfully' 
        };
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }    
    }
}

export const getUserById = async (id) => {
    try {
        const response = await Axios.get(`/users/${id}`);
        return { 
            success: true, 
            data: response.data, 
            msg: 'User fetched successfully' 
        };
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }    
    }
}

export const updateUser = async (id, firstname, lastname, phonenumber, email, password, profile) => {
  try {
    const dataToUpdate = {};
    if (firstname) dataToUpdate.firstName = firstname;
    if (lastname) dataToUpdate.lastName = lastname;
    if (phonenumber) dataToUpdate.phoneNumber = phonenumber;
    if (email) dataToUpdate.email = email;
    if (profile) dataToUpdate.profilePicture = profile;
    if (password) dataToUpdate.password = password;

    const response = await Axios.patch(`/users/${id}`, dataToUpdate);
    return {
      success: true,
      data: response.data,
      msg: 'User updated successfully'
    };
  } catch (e) {
    return {
      success: false,
      data: null,
      msg: `${e}`
    }
  }
}

export const deleteUser = async (id) => {
    try {
        const response = await Axios.delete(`/users/${id}`);
        return { 
            success: true, 
            data: response.data, 
            msg: 'User deleted successfully' 
        };
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }    
    }
}