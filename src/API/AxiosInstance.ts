import axios from "axios";
import store from "../Redux/Store";
import { refreshSession } from "../Redux/Slice/AuthThunks";
import { logout } from "../Redux/Slice/AuthSlice";


const api = axios.create({
  baseURL: import.meta.env.BASEURL,
  withCredentials: true, 
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


let isRefreshing = false;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      
      if (isRefreshing) return Promise.reject(error);

      original._retry = true;
      isRefreshing = true;

      try {
        const currentRefreshToken = store.getState().auth.refreshToken;
        if(currentRefreshToken)
        {
          const result = await store
            .dispatch(refreshSession(currentRefreshToken))
            .unwrap();
          original.headers.Authorization = `Bearer ${result.accessToken}`;

          return api(original); 
        }
        else
        {
          store.dispatch(logout());
        }
      } catch (err) {
        store.dispatch(logout());
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
