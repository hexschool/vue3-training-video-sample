import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_JSONPLACEHOLDER_URL,
});

const apiGetUsers = async () => {
  return await axiosInstance.get('/users');
};

export { apiGetUsers };
