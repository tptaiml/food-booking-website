import axios from 'axios';

const API_URL = 'https://api.example.com'; 

export const fetchRestaurants = async () => {
    const response = await axios.get(`${API_URL}/restaurants`);
    return response.data;
};

export const fetchMenu = async (restaurantId) => {
    const response = await axios.get(`${API_URL}/restaurants/${restaurantId}/menu`);
    return response.data;
};

export const submitOrder = async (orderData) => {
    const response = await axios.post(`${API_URL}/orders`, orderData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

export const signupUser = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
};
