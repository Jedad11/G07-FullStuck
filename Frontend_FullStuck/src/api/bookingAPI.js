import { Axios } from "@/utils/axiosInstace";

export const getAllBookings = async () => {
    try {
        const response = await Axios.get('/bookings');
        return {
            success: true,
            data: response.data,
            msg: 'Bookings fetch successfully'
        }
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`
        }
    }
}

export const createBooking = async (Information) => {
    try {
        const response = await Axios.post('/bookings', Information);
        return {
            success: true,
            data: response.data,
            msg: 'Booking created successfully'
        }
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`
        }
    }
}

export const getBookingById = async (id) => {
    try {
        const response = await Axios.get(`/bookings/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'Booking fetch successfully'
        }
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`
        }
    }
}
export const updateBooking = async (id, Information) => {
    try {
        const response = await Axios.patch(`/bookings/${id}`, Information);
        return {
            success: true,
            data: response.data,
            msg: 'Booking updated successfully'
        }
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`
        }
    }
}

export const deleteBooking = async (id) => {
    try {
        const response = await Axios.delete(`/bookings/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'Booking deleted successfully'
        }
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`
        }
    }
}

export const getBookingByUser = async (id) => {
    try {
        const response = await Axios.get(`/bookings/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'User booking fetch successfully'
        }
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`
        }
    }
}

export const getBookingByResident = async (id) => {
    try {
        const response = await Axios.get(`/bookings/${id}`);
        return {
            success: true,
            data: response.data,
            msg: 'Resident booking fetch successfully'
        }
    } catch (e) {
        return {
            success: false,
            data: null,
            msg: `${e}`
        }
    }
}