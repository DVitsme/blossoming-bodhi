import axios from 'axios';
import { auth } from '../lib/firebase';

// doesnt send token
export const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URI
});

// sends token
export const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URI
});

axiosAuth.interceptors.request.use(
  async (config) => {
    let user = auth.currentUser;
    if (user !== null) {
      config.headers.token = user ? await user.getIdToken(true) : '';
      return config;
    }
  },
  (err) => {
    console.log('actions/axios err', err);
    return Promise.reject(err);
  }
);
