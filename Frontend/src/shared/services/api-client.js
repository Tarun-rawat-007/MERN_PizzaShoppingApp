import axios from "axios";



export const getApiCall = async () =>{
    const response = await axios.get(import.meta.env.VITE_PIZZA_URL);
    return response.data;

}