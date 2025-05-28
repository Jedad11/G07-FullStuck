import { Axios } from "@/utils/axiosInstace";

export const searchResidentName = async (residentName) => {
  try {
    const response = await Axios.get('/search', {
      params: { name: residentName }
    });
    return { 
      success: true, 
      data: response.data, 
      msg: 'Users fetched successfully' 
    };
  } catch (e) {
    return { 
      success: false, 
      data: null, 
      msg: `${e}` 
    };
  }
}
