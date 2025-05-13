import { Axios } from ".../axiosInstace.js";

export const getAllReviews = async () => {
    try {
        const response = Axios.get('/reviews');
        return{
            success: true,
            data: response.data,
            msg: 'Reviews fetch successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const createReview = async (Information) => {
    try {
        const response = Axios.get('/reviews',Information);
        return{
            success: true,
            data: response.data,
            msg: 'Reviews created successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const getReviewById = async (id) => {
    try {
        const response = Axios.get(`/reviews/${id}`);
        return{
            success: true,
            data: response.data,
            msg: 'Review fetch successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const updateReview = async (id, Information) => {
    try {
        const response = Axios.get(`/reviews/${id}`,Information);
        return{
            success: true,
            data: response.data,
            msg: 'Reviews updated successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const deleteReview = async (id) => {
    try {
        const response = Axios.get(`/reviews/${id}`);
        return{
            success: true,
            data: response.data,
            msg: 'Reviews deleted successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const getReviewByUser = async (id) => {
    try {
        const response = Axios.get(`/reviews/user/${id}`);
        return{
            success: true,
            data: response.data,
            msg: 'Review user fetch successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}

export const getReviewByResident = async (id) => {
    try {
        const response = Axios.get(`/reviews/resident/${id}`);
        return{
            success: true,
            data: response.data,
            msg: 'Review resident fetch successfully'
        }
    } catch (e) {
        return { 
            success: false, 
            data: null, 
            msg: `${e}`
        }
    }
}