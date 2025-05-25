import { Axios } from "@/utils/axiosInstace";

export const getAllResidents = async () => {
    try {
        const response = await Axios.get('/residents');
        return {
            success: true,
            data: response.data,
            msg: 'Residents fetch successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const createResident = async (Information) => {
    try {
        const response = await Axios.post('/residents',Information)
        return {
            success: true,
            data: response.data,
            msg: 'Resident created successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const getResidentById = async (id) => {
    try {
        const response = await Axios.get(`/resident/${id}`)
        return {
            success: true,
            data: response.data,
            msg: 'Resident fetch successfuklly'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const updateResident = async (id, Information) => {
    try {
        const response = await Axios.patch(`/residents/${id}`, Information)
        return {
            success: true,
            data: response.data,
            msg: 'Resident updated successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const deleteResident = async (id) => {
    try {
        const response = await Axios.delete(`/resident/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'Resident deleted successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const ResidentCard = async (id) => {
    try {
        const response = await Axios.get(`/residents/card`);
        return {
            success: true,
            data: response.data,
            msg: 'Resident card fetch successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}