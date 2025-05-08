import { Axios } from "axiosInstace";

export const getAllResident = async () => {
    try {
        const response = await Axios.get('/residents');
        return {
            success: true,
            data: response.data,
            msg:'Residents fetched successfully'
        };
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
};

export const createResident = async (resident) => {
    try {
        const response = await Axios.post('/residents',resident)
        return {
            success: true,
            data: response.data,
            msg: 'Resident created successfully'
        };
    } catch (error) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
};

export const getResidentById = async (id) => {
    try {
        const response = await Axios.get(`/resident/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'Resident fetched successfully'
        };
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
};

export const updateResident = async (id, updateData) => {
    try {
        const response = await Axios.patch(`/resident/${id}`, updateData);
        return {
            success: true,
            data: response.data,
            msg: 'Resident updated successfully'
        };
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
        const response = await Axios.delete(`/residents/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'Resident deleted successfully'
        };
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
        const response = await Axios.get(`/residents/card./${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'Resident card fetch successfully'
        };
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}