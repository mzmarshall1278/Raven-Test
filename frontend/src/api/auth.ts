import axios from 'axios';

const API_URL = 'http://localhost:3001/auth';

export const signup = async (email: string, password: string) => {
  return axios.post(`${API_URL}/register`, { email, password });
};

export const login = async (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
