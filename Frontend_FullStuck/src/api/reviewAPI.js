import { Axios } from "@/utils/axiosInstace";

// Get all reviews
export const getAllReviews = async () => {
    try {
        const response = await Axios.get('/reviews');
        return {
            success: true,
            data: response.data,
            msg: 'Reviews fetched successfully'
        };
    } catch (e) {
        return { success: false, data: null, msg: `${e}` };
    }
};

// Create a new review
export const createReview = async (Information) => {
    try {
        const response = await Axios.post('/reviews', Information);
        return {
            success: true,
            data: response.data,
            msg: 'Review created successfully'
        };
    } catch (e) {
        return { success: false, data: null, msg: `${e}` };
    }
};

// Get a review by ID
export const getReviewById = async (id) => {
    try {
        const response = await Axios.get(`/reviews/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'Review fetched successfully'
        };
    } catch (e) {
        return { success: false, data: null, msg: `${e}` };
    }
};

// Update a review
export const updateReview = async (id, Information) => {
    try {
        const response = await Axios.patch(`/reviews/${id}`, Information);
        return {
            success: true,
            data: response.data,
            msg: 'Review updated successfully'
        };
    } catch (e) {
        return { success: false, data: null, msg: `${e}` };
    }
};

// Delete a review
export const deleteReview = async (id) => {
    try {
        const response = await Axios.delete(`/reviews/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'Review deleted successfully'
        };
    } catch (e) {
        return { success: false, data: null, msg: `${e}` };
    }
};

// Get reviews by user ID
export const getReviewByUser = async (id) => {
    try {
        const response = await Axios.get(`/reviews/user/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'User reviews fetched successfully'
        };
    } catch (e) {
        return { success: false, data: null, msg: `${e}` };
    }
};

// Get reviews by resident ID
export const getReviewByResident = async (id) => {
    try {
        const response = await Axios.get(`/reviews/resident/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'Resident reviews fetched successfully'
        };
    } catch (e) {
        return { success: false, data: null, msg: `${e}` };
    }
};

export const getAverageRatings = async (residentId) => {
    try {
        const response = await Axios.get(`/reviews/rating/${residentId}`);
        return {
            success: true,
            data: response.data.data,
            msg: response.data.msg,
        };
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`,
        };
    }
};