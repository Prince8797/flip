import axios from 'axios';

const URL = "https://ekartweb.onrender.com";

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);//post request will send data to route.js in server
    } catch (error) {
        // console.log("Error while calling authentication/Signup Api", error.message);
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);//post request will send data to route.js in server
    } catch (error) {
        // console.log("Error while calling Login Api", error.message);
        return error.response;
    }
}

export const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        // console.log('error while calling payment API', error.message);
    }
}