import { Axios } from "axiosInstace";

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

export const getBookingById = async